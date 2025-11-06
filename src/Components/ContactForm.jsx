import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();    
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // From .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // From .env
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // From .env
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-36 my-15 px-4 "
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg  p-4 border rounded-md border-[#99000080] text-sm"
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-900 p-2 w-1/2 rounded focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-900 p-2 w-1/2 rounded focus:outline-none"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-gray-900 p-2  rounded focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-900 p-2 rounded focus:outline-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-gray-900 text-white py-2  rounded-full hover:border border-[#99000080] hover:shadow-xl shadow-[#99000080] transition mx-20 cursor-pointer"
        >
          Send Message
        </button>
        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
      <div className="flex flex-col items-center gap-4">
        {/* Icons */}
        <div className="flex items-center gap-8 text-4xl cursor-pointer">
          {/* Phone */}
          <a
            href="tel:+256750179642"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-all duration-300"
          >
            <IoIosCall />
          </a>

          {/* Email */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:monir.shekoyans1@gmail.com";
            }}
            className="hover:scale-125 transition-all duration-300"
          >
            <IoIosMail />
          </a>


          {/* Instagram */}
          <a
            href="https://github.com/monir-shokohyan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-all duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
