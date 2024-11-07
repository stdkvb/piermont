"use client";
import { Button } from "../ui";
import { ParallaxBanner } from "react-scroll-parallax";

interface BackyardProps {
  imageSrc: string;
  button: boolean;
}

export const Backyard: React.FC<BackyardProps> = ({ imageSrc, button }) => {
  return (
    <section className="h-screen max-h-[1080px] flex flex-col justify-end relative">
      <ParallaxBanner
        layers={[{ image: imageSrc, speed: -20, expanded: false }]}
        className="aspect-[1100/2200]"
      >
        <div
          className="absolute inset-0  z-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 45.09%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0) 45.62%, rgba(0, 0, 0, 0.6) 99.98%)",
          }}
        />
        <div className="absolute bottom-[32px] z-10 container flex flex-col gap-[48px] justify-between  lg:items-end lg:flex-row xl:gap-[164px] xl:bottom-[64px]">
          <h2 className="header_2 text-white">Двор&nbsp;мечты</h2>
          <p className="body_base text-white max-w-[837px]">
            Закрытый террасированный двор-парк — настоящее чудо света.
            Он разделён на множество зон, как для игр детей разного возраста,
            так и на зоны тихого отдыха и даже зоны для интеллектуальных игр.
            Но самое главное он расположен на разных уровнях с мостиками,
            плавными линиями тропинок и арт-объектами создающими ощущение
            слияния с природой, приватности и гармонии.
          </p>
          {button && <Button variant="gold">узнать подробнее</Button>}
        </div>
      </ParallaxBanner>
    </section>
  );
};
