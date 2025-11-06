import ReactLenis from "lenis/react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
        }}
      >
        <NavBar />
        <Home />
      </ReactLenis>

      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
