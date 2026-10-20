import ReactLenis from "lenis/react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

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
          touchMultiplier: 2,
          allowNestedScroll: true
        }}
      >
        <NavBar />
        <Home />
      </ReactLenis>
    </div>
  );
};

export default Layout;
