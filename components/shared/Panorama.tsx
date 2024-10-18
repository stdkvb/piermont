"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Panorama: React.FC = () => {
  const panoramaRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [panoramaWidth, setPanoramaWidth] = useState(0);

  useEffect(() => {
    if (panoramaRef.current) {
      const panorama = panoramaRef.current;
      setContainerWidth(panorama.clientWidth);
      setPanoramaWidth(panorama.scrollWidth);

      panorama.scrollLeft = (panorama.scrollWidth - panorama.clientWidth) / 2;
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering || !panoramaRef.current) return;

      const { clientX } = e;
      const relativeX = clientX / containerWidth;
      const maxScrollLeft = panoramaWidth - containerWidth;

      panoramaRef.current.scrollLeft = relativeX * maxScrollLeft;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering, containerWidth, panoramaWidth]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={panoramaRef}
        className="relative w-full h-full overflow-x-scroll whitespace-nowrap no-scrollbar"
      >
        <motion.div
          className="inline-block h-full"
          style={{ width: "200%", minWidth: "2518px" }}
        >
          <img
            src="images/panorama.png"
            alt="Panorama"
            className="h-full w-full object-cover min-h-[720px]"
          />
        </motion.div>
        <div className="absolute container mx-6 top-[270px] flex justify-between w-[200%] min-w-[2518px]">
          <div className="h-[297px] relative w-[2px] bg-gold  before:content-[''] before:w-[6px] before:h-[6px] before:bg-gold before:rounded-full before:absolute before:top-0 before:left-1/2 before:translate-x-[-50%]">
            <span className="body_base absolute left-[50%] translate-x-[-50%] bottom-[100%] mb-[12px]">
              Выезд
            </span>
          </div>
          <div className="h-[297px] relative w-[2px] bg-gold  before:content-[''] before:w-[6px] before:h-[6px] before:bg-gold before:rounded-full before:absolute before:top-0 before:left-1/2 before:translate-x-[-50%]">
            <span className="body_base absolute left-[50%] translate-x-[-50%] bottom-[100%] mb-[12px]">
              Лодочный причал
            </span>
          </div>
        </div>
      </div>
      <div className="container absolute top-[48px] flex flex-col gap-[24px] sm:flex-row justify-between">
        <h2 className="header_2">Жизнь на высоте</h2>
        <p className="body_base sm:max-w-[50%] lg:max-w-[572px]">
          Резиденция располагается на южном склоне горы, окружённая зеленью.
          Террасированный двор поможет создать атмосферу приватности,
          а из квартир откроются панорамные виды на реку Белую и центр города.
        </p>
      </div>
    </section>
  );
};
