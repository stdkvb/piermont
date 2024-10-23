"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Lobby = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h2Refs = useRef<(HTMLHeadingElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headers = h2Refs.current;
    const container = containerRef.current;

    if (section && headers.length && container) {
      const sectionHeight = section.offsetHeight;

      gsap.set(container, { position: "relative" });

      const firstHeaderTrigger = ScrollTrigger.create({
        trigger: headers[0],
        start: "top bottom",
        onEnter: () => {
          gsap.to(container, { position: "sticky", top: "48px", duration: 0 });
        },
      });

      const lastHeaderTrigger = ScrollTrigger.create({
        trigger: headers[headers.length - 1],
        start: "top bottom",
      });

      headers.forEach((header, index) => {
        const startPercentages = [0.25, 0.75, 1];

        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 150 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: `top+=${sectionHeight * startPercentages[index]} bottom`,
                scrub: true,
                markers: false,
              },
            }
          );
        }
      });

      return () => {
        firstHeaderTrigger.kill();
        lastHeaderTrigger.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[920px] sm:min-h-[1453px] md:min-h-[1662px] py-[25%] md:py-[120px] relative"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), url('images/lobby.jpeg') center center / cover scroll no-repeat",
      }}
    >
      <div ref={containerRef} className="container flex flex-col justify-end">
        <h2
          ref={(el) => {
            h2Refs.current[0] = el;
          }}
          className="header_1 md:text-[200px] text-white mb-[12px] sm:mb-[48px]"
        >
          Трехуровневые
        </h2>
        <h2
          ref={(el) => {
            h2Refs.current[1] = el;
          }}
          className="header_1 md:text-[200px] text-white mb-[12px] sm:mb-[48px]"
        >
          премиальные
        </h2>
        <h2
          ref={(el) => {
            h2Refs.current[2] = el;
          }}
          className="header_1 md:text-[200px] text-white"
        >
          лобби
        </h2>
      </div>
    </section>
  );
};
