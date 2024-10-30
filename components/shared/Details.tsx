"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import data from "./../../public/data.json";
import { Slider } from "./Slider";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

export const Details = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const details = detailsRef.current;

    if (container && details) {
      const totalWidth = window.innerWidth >= 1024 ? 2416 : 1328;
      details.style.width = `${totalWidth}px`;

      const scrollTween = gsap.to(details, {
        x: -totalWidth + (window.innerWidth >= 1024 ? 320 : 240),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        scrollTween.kill();
      };
    }
  }, []);

  return (
    <div ref={containerRef}>
      <section
        className=" relative sm:min-h-[577px] lg:min-h-[717px] py-[64px] flex flex-col gap-[32px] lg:flex-row lg:items-center"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('images/facade.webp') center center / cover scroll no-repeat",
        }}
      >
        <div className="top-0 left-0 container flex flex-col gap-[24px] z-10 lg:max-w-[584px] lg:justify-center">
          <h2 className="header_2 text-white">Красота в деталях</h2>
          <p className="body_base text-white">
            Натуральные материалы, формирующие южную курортную архитектуру
            приятны и на вид и на ощупь, создают неповторимое ощущение гармонии
            и стиля.
          </p>
        </div>

        <div className="overflow-hidden h-full flex lg:items-center">
          <div
            ref={detailsRef}
            className="flex gap-[32px] lg:gap-[204px] ml-[16px] sm:ml-[34px] lg:ml-[0]"
            style={{ willChange: "transform" }}
          >
            {data.details.map((detail) => (
              <div key={detail.id} className="flex flex-col gap-[24px] h-fit">
                <Image
                  src={detail.image}
                  alt="photo"
                  width={320}
                  height={360}
                  className="object-cover w-full min-w-[240px] h-[240px] lg:min-w-[320px] lg:h-[360px]"
                />
                <p className="body_base uppercase text-white">{detail.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Slider data={data.thirdSlider} />
    </div>
  );
};
