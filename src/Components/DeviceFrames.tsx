// CSS device frames for raw screenshots, sized to line up with the
// pre-rendered laptop/phone mockup images used by the older projects.

type FrameProps = {
  src: string;
  alt: string;
  className?: string;
};

export const LaptopFrame = ({ src, alt, className = "" }: FrameProps) => (
  <div className={`w-full sm:w-auto sm:h-[250px] aspect-[3/2] flex flex-col items-center justify-center ${className}`}>
    {/* Screen + bezel */}
    <div className="w-[84%] aspect-[16/10] bg-[#0b0b0b] rounded-t-xl border border-gray-700 p-[2.5%] pb-[3%] shadow-2xl">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top rounded-[3px]"
      />
    </div>
    {/* Base */}
    <div className="w-full h-[5%] rounded-b-xl bg-gradient-to-b from-gray-300 to-gray-500 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[14%] h-1/2 rounded-b-md bg-gray-400" />
    </div>
  </div>
);

export const PhoneFrame = ({ src, alt, className = "" }: FrameProps) => (
  // No positioning class on the outer div: callers pass absolute/static
  <div
    className={`aspect-[9/19] bg-[#0b0b0b] rounded-[1.4rem] border border-gray-600 p-[5px] shadow-2xl ${className}`}
  >
    <div className="relative w-full h-full">
      {/* Dynamic island */}
      <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[30%] h-[3.5%] rounded-full bg-black z-10" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top rounded-[1.1rem]"
      />
    </div>
  </div>
);
