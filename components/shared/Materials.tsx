"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import data from "../../public/data.json";
import { Slider } from "./Slider";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

export const Materials = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const materials = materialsRef.current;

    // Отключаем анимацию, если разрешение больше или равно 1066px
    if (window.innerWidth >= 1200) {
      return;
    }

    if (container && materials) {
      const totalWidth = window.innerWidth >= 640 ? 1066 : 811;
      materials.style.width = `${totalWidth}px`;

      // Находим последнюю карточку
      const lastCard = materials.lastElementChild as HTMLDivElement;
      if (lastCard) {
        const lastCardWidth = lastCard.offsetWidth;

        // Рассчитываем `end` так, чтобы анимация завершалась,
        // когда последняя карточка полностью видима
        const endValue =
          materials.offsetWidth - window.innerWidth + lastCardWidth - 40;

        const scrollTween = gsap.to(materials, {
          x: -endValue,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${endValue}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        return () => {
          scrollTween.kill();
        };
      }
    }
  }, []);

  return (
    <div ref={containerRef}>
      <section className="relative py-[64px] flex flex-col gap-[32px]">
        <div className="top-0 left-0 container flex flex-col gap-[24px] z-10 md:mb-[32px] lg:justify-center lg:items-center">
          <h2 className="header_2 text-gold">натуральные материалы</h2>
          <p className="body_base lg:text-center max-w-[960px]">
            В основе дизайн-кода дома лежит гармоничное сочетание материалов
            и фактур в курортном стиле. Первое впечатление создаёт обилие
            светлого натурального камня и большая площадь остекления. Дальше
            включаются светлый кирпич, металл, дерево, камень и большое
            количество зелени, создавая незабываемое впечатление и новую
            эстетику жизненного пространства.
          </p>
        </div>

        <div className="overflow-hidden h-full flex lg:items-center lg:justify-center">
          <div
            ref={materialsRef}
            className="flex gap-[24px] lg:gap-[48px] ml-[16px] sm:ml-[34px] lg:ml-[64px]"
            style={{ willChange: "transform" }}
          >
            {data.materials.map((material) => (
              <div
                key={material.id}
                className="flex flex-col gap-[24px] h-fit items-center"
              >
                <div className="w-[143px] aspect-square sm:w-[194px] rounded-full overflow-hidden">
                  <Image
                    src={material.image}
                    alt="photo"
                    width={320}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>

                <p className="card_text uppercase text-center sm:demi_text text-nowrap">
                  {material.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Slider data={data.thirdSlider} />
    </div>
  );
};
