"use client";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Slide {
  id: number;
  title: string;
  image: string;
}

interface SliderDataType {
  id: number;
  title: string;
  slides: Slide[];
}

interface SliderProps {
  data: SliderDataType;
}

export const Slider: React.FC<SliderProps> = ({ data }) => {
  const sliderRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef(null);

  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  return (
    <section className=" w-full py-12 md:py-[160px] flex flex-col gap-8 md:gap-16 lg:flex-row lg:relative lg:gap-0">
      <div className="container max-w-[640px]">
        <h2 className="header_2 text-gold md:w-[584px]">{data.title}</h2>
      </div>
      <div className="px-4 sm:pl-[2.125rem] sm:pr-0 md:pl-[2.125rem] lg:pl-0">
        <Swiper
          pagination={{
            type: "fraction",
            el: paginationRef.current,
          }}
          spaceBetween="20"
          breakpoints={{
            640: {
              slidesPerView: "auto",
            },
          }}
          modules={[Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
          className="w-full"
        >
          {data.slides.map(({ id, image, title }) => (
            <SwiperSlide key={id} className="max-w-[434px]">
              <div
                className="min-h-[538px] w-full mb-8"
                style={{
                  background: `url(${image}) center center / cover scroll no-repeat`,
                }}
              ></div>
              <p
                className="body_base block"
                dangerouslySetInnerHTML={{ __html: title }}
              ></p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex gap-[25px] sm:gap-34 justify-center items-center lg:absolute lg:left-[4rem] lg:bottom-[160px] lg:w-fit">
        <button
          onClick={() => sliderRef.current?.slidePrev()}
          className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px]"
        >
          <div
            className="prev relative"
            onMouseEnter={() => setIsPrevHovered(true)}
            onMouseLeave={() => setIsPrevHovered(false)}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <circle
                cx="28"
                cy="28"
                r="27.5"
                className="prev-hover:fill-white transition-all duration-300"
              />
              <path
                d="M12.2929 27.2929C11.9024 27.6834 11.9024 28.3166 12.2929 28.7071L18.6569 35.0711C19.0474 35.4616 19.6805 35.4616 20.0711 35.0711C20.4616 34.6805 20.4616 34.0474 20.0711 33.6569L14.4142 28L20.0711 22.3431C20.4616 21.9526 20.4616 21.3195 20.0711 20.9289C19.6805 20.5384 19.0474 20.5384 18.6569 20.9289L12.2929 27.2929ZM43 27L13 27V29L43 29V27Z"
                className="fill-[#343330] transition-all duration-300"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_prev"
                  x1="28"
                  y1="0"
                  x2="28"
                  y2="56"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor={isPrevHovered ? "black" : "#999999"} />
                  <stop
                    offset="1"
                    stopColor={isPrevHovered ? "black" : "white"}
                  />
                </linearGradient>
              </defs>
              <circle
                cx="28"
                cy="28"
                r="27.5"
                stroke="url(#paint0_linear_prev)"
              />
            </svg>
          </div>
        </button>
        <div
          ref={paginationRef}
          className={`.pagination${data.id} header_3 min-w-[40px]`}
        ></div>
        <button
          onClick={() => sliderRef.current?.slideNext()}
          className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px]"
        >
          <div
            className="next relative"
            onMouseEnter={() => setIsNextHovered(true)}
            onMouseLeave={() => setIsNextHovered(false)}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <circle
                cx="28"
                cy="28"
                r="27.5"
                className="next-hover:fill-white transition-all duration-300"
              />
              <path
                d="M43.7071 28.7071C44.0976 28.3166 44.0976 27.6834 43.7071 27.2929L37.3431 20.9289C36.9526 20.5384 36.3195 20.5384 35.9289 20.9289C35.5384 21.3195 35.5384 21.9526 35.9289 22.3431L41.5858 28L35.9289 33.6569C35.5384 34.0474 35.5384 34.6805 35.9289 35.0711C36.3195 35.4616 36.9526 35.4616 37.3431 35.0711L43.7071 28.7071ZM13 29L43 29V27L13 27V29Z"
                fill="#343330"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_next"
                  x1="28"
                  y1="0"
                  x2="28"
                  y2="56"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor={isNextHovered ? "black" : "#999999"} />
                  <stop
                    offset="1"
                    stopColor={isNextHovered ? "black" : "white"}
                  />
                </linearGradient>
              </defs>
              <circle
                cx="28"
                cy="28"
                r="27.5"
                stroke="url(#paint0_linear_next)"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};
