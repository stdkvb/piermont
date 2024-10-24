"use client";
import { Button } from "../ui";
import { ParallaxBanner } from "react-scroll-parallax";

export const Backyard = () => {
  return (
    <section className="h-screen max-h-[1080px] flex flex-col justify-end relative">
      <ParallaxBanner
        layers={[
          { image: "images/backyard.jpeg", speed: -20, expanded: false },
          {
            image:
              "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)) center center / cover scroll no-repeat",
            speed: -20,
            expanded: false,
          },
        ]}
        className="aspect-[1100/2200]"
      >
        <div className="absolute bottom-[120px] h-[300px] z-10 container flex flex-col gap-[48px] lg:flex-row lg:justify-between xl:gap-[164px] lg:items-end">
          <h2 className="header_2 text-white">Двор&nbsp;мечты</h2>
          <p className="body_base text-white">
            Закрытый террасированный двор-парк — настоящее чудо света.
            Он разделён на множество зон, как для игр детей разного возраста,
            так и на зоны тихого отдыха и даже зоны для интеллектуальных игр.
            Но самое главное он расположен на разных уровнях с мостиками,
            плавными линиями тропинок и арт-объектами создающими ощущение
            слияния с природой, приватности и гармонии.
          </p>
          <Button variant="gold">узнать подробнее</Button>
        </div>
      </ParallaxBanner>
    </section>
  );
};
