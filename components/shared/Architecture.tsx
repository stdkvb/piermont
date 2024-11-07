"use client";
import { ParallaxBanner } from "react-scroll-parallax";

export const Architecture = () => {
  return (
    <section className="w-full h-screen relative">
      <ParallaxBanner
        layers={[{ image: "images/front.webp", speed: -20, expanded: false }]}
        className="w-full h-full"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
          }}
        />
        <div className="absolute z-10 top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit">
          <h1 className="header_2 xl:!text-[180px] text-white text-center">
            Архитектура
            <br />
            вне времени
          </h1>
        </div>
      </ParallaxBanner>
    </section>
  );
};
