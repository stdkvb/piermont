"use client";
import { useState } from "react";
import data from "../../public/data.json";

export const Oasis = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section
      className="w-full aspect-[1869/1920] relative"
      style={{
        background:
          " url('images/airview.webp') center center / cover scroll no-repeat",
      }}
    >
      <h2 className="hidden container header_2 text-green absolute top-[48px] lg:top-[108px] sm:block">
        Оазис приватности,
        <br />
        комфорта и стиля
      </h2>
      <div className="hidden w-full h-full relative md:block">
        {data.oasisPoints.map((point) => (
          <div
            key={point.id}
            className="absolute flex items-center"
            style={{
              top: `${point.top}%`,
              left: `${point.left}%`,
            }}
            onClick={() => {
              setActiveIndex(point.id);
            }}
          >
            <div
              className={`relative bg-transparent backdrop-blur-sm flex justify-center items-center cursor-pointer w-[56px] h-[56px] rounded-full transition-all duration-300 ease-in-out lg:w-[79px] lg:h-[79px] ${
                activeIndex == point.id
                  ? "opacity-0 invisible"
                  : "opacity-100 visible"
              }`}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 m-auto inset-0 rounded-full w-[38px] h-[38px]  bg-gold lg:w-[53px] lg:h-[53px]"></div>

              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-[27px] lg:h-[57px] z-10"
              >
                <path
                  d="M8.49923 18.9987V10.9632H0.145508V8.39343H8.49923V0.35791H11.1707V8.39343H19.5032V10.9632H11.1707V18.9987H8.49923Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className={`bg-gold flex items-center justify-center px-[26px] py-[12px] gap-[30px] rounded-[8px] transition-all duration-300 ease-in-out ${
                activeIndex === point.id
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
              style={{
                flexDirection: Number(point.left) <= 60 ? "row-reverse" : "row",
                marginLeft:
                  Number(point.left) <= 60
                    ? "-83%"
                    : window.innerWidth >= 1024
                    ? "-17%"
                    : "-25%",
              }}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer lg:w-[37px] lg:h-[37px]"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(null);
                }}
              >
                <circle
                  cx="8.89838"
                  cy="8.89838"
                  r="8.89838"
                  transform="matrix(-1 0 0 1 22.5312 4.83643)"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M0.369225 13.7348C0.369225 21.0601 6.30755 26.9985 13.6329 26.9985C20.9582 26.9985 26.8965 21.0601 26.8965 13.7348C26.8965 6.40952 20.9582 0.471191 13.6329 0.471191C6.30755 0.471191 0.369225 6.40952 0.369225 13.7348ZM22.5113 13.7348C22.5113 18.6382 18.5363 22.6132 13.6329 22.6132C8.72945 22.6132 4.75445 18.6382 4.75445 13.7348C4.75445 8.83142 8.72945 4.85642 13.6329 4.85642C18.5363 4.85642 22.5113 8.83142 22.5113 13.7348Z"
                  fill="white"
                  fill-opacity="0.6"
                />
                <path
                  d="M18.166 14.5048H14.2535H13.0023H9.09974V13.3013H13.0023H14.2535H18.166V14.5048Z"
                  fill="white"
                />
              </svg>
              <span className="card_text text-white text-nowrap">
                {point.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
