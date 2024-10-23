"use client";
import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import data from "../../public/data.json";

export const MainSlider = () => {
  const progressCircle = useRef<SVGCircleElement | null>(null);
  const swiperRef = useRef<SwiperType>();

  const onAutoplayTimeLeft = (
    s: SwiperType,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
  };

  return (
    <section className="w-full">
      <Swiper
        pagination={{
          type: "fraction",
          el: ".pagination",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="min-h-[100vh]"
      >
        {data.mainSlider.map(({ id, image, title }) => (
          <SwiperSlide key={id}>
            <div
              className="min-h-[100vh] w-full absolute left-0 top-0"
              style={{
                background: `url(${image}) center center / cover scroll no-repeat`,
              }}
            ></div>
            <div className="relative z-10 h-full flex items-center justify-center min-h-[100vh]">
              <div className="text-center">
                <p
                  className="header_1 text-white"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-[40px] z-10 w-full flex gap-[25px] sm:gap-34 justify-center items-center">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px]"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.5"
              cx="28"
              cy="28"
              r="27"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M12.2929 27.2929C11.9024 27.6834 11.9024 28.3166 12.2929 28.7071L18.6569 35.0711C19.0474 35.4616 19.6805 35.4616 20.0711 35.0711C20.4616 34.6805 20.4616 34.0474 20.0711 33.6569L14.4142 28L20.0711 22.3431C20.4616 21.9526 20.4616 21.3195 20.0711 20.9289C19.6805 20.5384 19.0474 20.5384 18.6569 20.9289L12.2929 27.2929ZM43 27L13 27V29L43 29V27Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="pagination header_3 text-white"></div>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] relative"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 57 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.5"
              cx="28.5"
              cy="28"
              r="27"
              transform="rotate(180 28.5 28)"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M44.2071 28.7071C44.5976 28.3166 44.5976 27.6834 44.2071 27.2929L37.8431 20.9289C37.4526 20.5384 36.8195 20.5384 36.4289 20.9289C36.0384 21.3195 36.0384 21.9526 36.4289 22.3431L42.0858 28L36.4289 33.6569C36.0384 34.0474 36.0384 34.6805 36.4289 35.0711C36.8195 35.4616 37.4526 35.4616 37.8431 35.0711L44.2071 28.7071ZM13.5 29L43.5 29V27L13.5 27V29Z"
              fill="white"
            />
          </svg>
          <div
            className="absolute top-0 z-10 w-[42px] h-[42px] sm:w-[56px] sm:h-[56px]"
            slot="container-end"
          >
            <svg
              viewBox="0 0 56 56"
              className="absolute left-0 top-0 z-10 w-full h-full transform -rotate-90"
            >
              <circle
                ref={progressCircle}
                cx="28"
                cy="28"
                r="26"
                style={{
                  strokeWidth: 2,
                  stroke: "white",
                  fill: "none",
                  strokeDashoffset: `calc(163.36px * (1 - var(--progress)))`,
                  strokeDasharray: 163.36,
                }}
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};
