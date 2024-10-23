"use client";

import { Button } from "../ui";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specification = [
  { title: "Секция", value: "3" },
  { title: "Площадь", value: "45-85 М2" },
  { title: "Этаж", value: "2-5" },
  { title: "Окна", value: "на северо-запад" },
  { title: "Вид", value: "во двор" },
];

export const UniqueFormats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;

    if (container && section) {
      const totalWidth = contentRefs.current.reduce(
        (acc, el) => acc + el.offsetWidth,
        0
      );
      container.style.width = `${totalWidth}px`;

      const viewportWidth = window.innerWidth;

      const horizontalScroll = gsap.to(container, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth - viewportWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        horizontalScroll.kill();
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen max-h-[1123px] flex flex-col bg-white overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex h-full items-start"
        style={{ width: "auto" }}
      >
        <div
          ref={(el) => (contentRefs.current[0] = el!)}
          className="container h-full w-screen flex-shrink-0 flex flex-col justify-center md:w-[820px]"
        >
          <h2 className="header_2 text-gold">
            Уникальные <br className="md:hidden" />
            форматы
            <br className="hidden md:block" />
            квартир
          </h2>
        </div>
        <div
          ref={(el) => (contentRefs.current[1] = el!)}
          className="w-screen h-full flex-shrink-0 md:w-[960px]"
        >
          <img
            src="/images/patio.png"
            alt="photo"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          ref={(el) => (contentRefs.current[2] = el!)}
          className="container h-full flex flex-col items-center justify-between gap-[24px] md:gap-[40px] w-screen flex-shrink-0 py-[32px] md:py-[70px] 2xl:py-[100px] md:w-[820px]"
        >
          <img src="/images/plan1.png" alt="plan" className="max-h-[350px]" />
          <p className="header_4 text-gold uppercase">
            Двухуровневый пентхаус с патио
          </p>
          <ul className="w-[275px] flex flex-col gap-[10px]">
            {specification.map((spec) => (
              <li key={spec.title} className="flex justify-between">
                <span className="text-grey body_base uppercase">
                  {spec.title}
                </span>
                <span className="text-darkGrey body_base uppercase">
                  {spec.value}
                </span>
              </li>
            ))}
          </ul>
          <Button variant="gold">Выбрать пентхаус с патио</Button>
        </div>

        <div
          ref={(el) => (contentRefs.current[3] = el!)}
          className="flex h-full w-screen flex-shrink-0 py-[32px] md:py-[70px] 2xl:py-[100px] md:w-[960px]"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('/images/room.png') center center / cover scroll no-repeat",
          }}
        >
          <div className="container w-screen max-w-[1100px] flex flex-col items-start justify-between">
            <h2 className="header_2 text-white">
              Найдите
              <br />
              свою идеальную
              <br />
              квартиру
            </h2>
            <Button variant="gold">Посмотреть все планировки</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
