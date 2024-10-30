"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  Separator,
  SheetHeader,
  SheetTitle,
} from "../ui";

import { Header } from "./Header";
import { useModalStore } from "@/store/modal";
import { PresentationForm } from "./PresentationForm";

interface MenuProps {
  transparent?: boolean;
}

const menu = [
  {
    id: 1,
    title: "О проекте",
    links: [
      { id: 1, title: "Локация и виды", link: "#" },
      { id: 2, title: "Курортная архитектура", link: "#" },

      { id: 3, title: "Двор мечты", link: "#" },
      { id: 4, title: "Трёхуровневые премиальные лобби", link: "#" },
      { id: 5, title: "Выбрать квартиру", link: "#" },
      { id: 6, title: "HART Development", link: "#" },
    ],
    image: "/images/entrance.webp",
  },
  {
    id: 2,
    title: "Архитектура и благоустройство",
    links: [
      { id: 1, title: "Уникальная архитектура", link: "#" },
      { id: 2, title: "Натуральные материалы", link: "#" },
      { id: 3, title: "Двор мечты", link: "#" },
      { id: 4, title: "Благоустройство двора", link: "#" },
      { id: 5, title: "Отдых для всех", link: "#" },
      { id: 6, title: "Премиальные лобби", link: "#" },
      { id: 7, title: "Преимущества лобби", link: "#" },
    ],
    image: "/images/sofa.webp",
  },
  {
    id: 3,
    title: "Выбор квартиры",
    links: [
      { id: 1, title: "Выбор по параметрам", link: "#" },
      { id: 2, title: "Выбор на схеме", link: "#" },
    ],
    image: "/images/table.webp",
  },
  {
    id: 4,
    title: "Контакты",
    links: [],
    image: "/images/crane.webp",
  },
];

export const Menu: React.FC<MenuProps> = ({ transparent }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { openModal } = useModalStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      {!isMenuOpen && (
        <SheetTrigger>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16H27"
              stroke={transparent ? "white" : "#193232"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 8H27"
              stroke={transparent ? "white" : "#193232"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 24H27"
              stroke={transparent ? "white" : "#193232"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SheetTrigger>
      )}
      <SheetContent
        tabIndex={-1}
        side="top"
        className="h-full bg-white p-0 flex flex-col gap-0 justify-start"
      >
        <SheetHeader className="hidden">
          <SheetTitle>Меню</SheetTitle>
        </SheetHeader>
        <div className="flex items-center relative top-0">
          <Header inMenu={true} />
          <SheetClose className="z-20 h-10 w-10 flex justify-center items-center absolute right-[1rem] sm:right-[2.125rem] lg:right-[4rem]">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 24.5391L23.5563 8.98271"
                stroke="#193232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 24.5391L23.5563 8.98271"
                stroke="#193232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 24.5391L8.44365 8.98271"
                stroke="#193232"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SheetClose>
        </div>
        <div className="container h-full bg-semilightGrey lg:bg-white flex flex-col py-[24px] gap-[32px] overflow-y-auto sm:items-start lg:justify-between lg:pb-[120px]">
          <div className="flex flex-col items-center gap-[24px] sm:items-start lg:hidden">
            <Link
              href="tel:+7 347 200-00-00"
              className="demi_text text-green md:hidden"
            >
              +7 347 200-00-00
            </Link>
            <Button
              variant="roundedGreen"
              size="small"
              className="min-w-60 w-[225px] lg:hidden"
            >
              Выбрать квартиру
            </Button>
          </div>
          <nav className="w-full relative">
            <div className="flex flex-col gap-7 sm:items-start relative w-full xl:w-[40%]">
              {menu.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className="flex flex-col items-center gap-[24px] sm:items-start   ">
                      <span
                        className={`header_4 cursor-pointer ${
                          activeIndex == item.id
                            ? "underline underline-offset-3"
                            : ""
                        }`}
                        onClick={() => {
                          setActiveIndex(item.id);
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div
                      className={`flex flex-col gap-[16px] sm:items-start lg:absolute lg:right-0 lg:top-0 xl:translate-x-[100%] ${
                        activeIndex != item.id ? "hidden" : ""
                      }`}
                    >
                      {item.links.map((link) => {
                        return (
                          <Link
                            key={link.id}
                            href={link.link}
                            className="card_text text-green text-center"
                          >
                            {link.title}
                          </Link>
                        );
                      })}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            {menu.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`w-[20vw] max-w-[410px] max-h-[325px] aspect-[410/325] hidden absolute right-0 top-0 ${
                    activeIndex == item.id ? "xl:block" : ""
                  }`}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt="photo"
                  />
                </div>
              );
            })}
          </nav>
          <Separator className="lg:hidden" />
          <div className="w-full flex flex-col gap-[32px] sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-[40%_320px_1fr] lg:h-[137px] xl:gap-0">
            <div className="flex flex-col items-center gap-[8px] sm:items-start sm:gap-[32px] lg:justify-between">
              <p className="body_base text-semiMediumGrey text-center sm:text-left">
                Желаете увидеть всё своими глазами?
                <br />
                Оставьте контакты, и мы свяжемся с вами
              </p>
              <div className="cursor-pointer flex gap-[10px] items-center ">
                <Link
                  href="/#excursion"
                  className="header_4"
                  onClick={closeMenu}
                >
                  Записаться на экскурсию
                </Link>
                <svg
                  className="mb-1 lg:w-[30px] lg:h-[30px]"
                  width="14"
                  height="14"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3168 1.88068C22.3168 1.3284 21.8691 0.880684 21.3168 0.880684L12.3168 0.880685C11.7645 0.880684 11.3168 1.3284 11.3168 1.88068C11.3168 2.43297 11.7645 2.88068 12.3168 2.88068L20.3168 2.88068L20.3168 10.8807C20.3168 11.433 20.7645 11.8807 21.3168 11.8807C21.8691 11.8807 22.3168 11.433 22.3168 10.8807L22.3168 1.88068ZM1.70711 22.9046L22.0239 2.58779L20.6097 1.17358L0.292893 21.4904L1.70711 22.9046Z"
                    fill="#343330"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[8px] sm:items-start sm:justify-between lg:items-start">
              <p className="body_base text-semiMediumGrey text-center sm:text-left">
                Хотите узнать больше?
                <br />
                Получите презентацию проекта
              </p>
              <Button
                variant="green"
                size="small"
                className="!max-w-full lg:max-w-[457px]"
                onClick={() => {
                  openModal(<PresentationForm />);
                }}
              >
                Получить презентацию
              </Button>
            </div>
            <div className="w-full flex flex-col items-center gap-[8px] sm:col-span-2 lg:col-span-1 sm:flex-row sm:justify-between lg:flex-col lg:items-end lg:gap-[40px]">
              <Link
                href="#"
                target="_blank"
                className="body_base text-semiMediumGrey text-center lg:text-right"
              >
                Перейти на сайт <br className="hidden lg:block" />
                застройщика
              </Link>
              <div className="sm:w-[48%] lg:w-fit">
                <svg
                  width="171"
                  height="39"
                  viewBox="0 0 171 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_431_3848)">
                    <path
                      d="M27.5994 37.8769H34.9988L34.0247 31.4686L34.9988 25.4619L33.2899 18.8741L34.1785 7.63824L32.4868 3.24642V0.631836H29.8124V1.65716H26.1212L25.0788 3.16952L21.4474 4.86131L22.8914 7.36482L26.574 7.95438L24.1047 9.94523L21.9173 9.23604L19.8496 5.56195L17.2863 3.96415L14.5521 4.30593L17.5682 7.33919L18.6705 12.7307L21.1056 14.0893L19.26 15.5589L14.4923 15.2513L11.6982 16.7551L15.4407 18.8314L17.2094 18.3956L21.2509 20.1131L23.199 19.2843L22.6265 23.0694L19.1404 27.7774L20.3366 35.2537L18.0467 36.4329L17.2692 37.8769H24.4038L23.8911 33.673L27.044 29.8964L30.6241 35.2025L28.2658 36.4499L27.5994 37.8769Z"
                      fill="#565656"
                    />
                    <path
                      d="M8.43509 0.635706L7.12402 1.94678L8.43509 3.25785L9.74616 1.94678L8.43509 0.635706Z"
                      fill="#565656"
                    />
                    <path
                      d="M11.9114 28.2047H9.39937V19.5663L10.6041 18.3616L9.39937 17.1568V14.5081L16.1067 7.80072L11.0912 2.78516L8.43386 5.44246L5.77655 2.78516L0.769531 7.80072L7.47688 14.5081V17.1568L6.27212 18.3616L7.47688 19.5663V28.2047H5.00755V27H3.08506V31.3234H5.00755V30.1187H7.47688V34.7497H5.00755V33.545H3.08506V37.8684H5.00755V36.6637H11.9114V37.8684H13.8339V33.545H11.9114V34.7497H9.39937V30.1187H11.9114V31.3234H13.8339V27H11.9114V28.2047ZM5.78509 5.49373L7.08384 6.79248L6.10123 7.77508L7.45979 9.13364L8.4424 8.15104L9.425 9.13364L10.7836 7.77508L9.80096 6.79248L11.0997 5.49373L13.3981 7.79217L8.4424 12.7479L3.48665 7.79217L5.78509 5.49373Z"
                      fill="#565656"
                    />
                    <path
                      d="M67.4248 1.75146H74.7388V23.3602H67.4248V15.3798H55.0269V23.3602H47.7129V1.75146H55.0269V9.34743H67.4248V1.75146ZM99.2014 1.75146L109.344 23.2064V23.3688H101.363L99.509 19.2077H88.2817L86.4275 23.3688H78.7034V23.2064L88.7516 1.75146H99.21H99.2014ZM97.3131 14.2775L93.9979 6.84392H93.8099L90.4947 14.2775H97.3217H97.3131ZM132.533 15.8497L140.65 23.2064V23.3688H131.465L123.485 15.901H120.622V23.3688H113.308V1.75146H131.106C133.208 1.75146 134.934 2.03343 136.301 2.59736C137.668 3.16129 138.677 3.96446 139.334 5.01542C139.992 6.06639 140.317 7.3395 140.317 8.84331C140.317 10.3471 139.992 11.6202 139.334 12.6712C138.677 13.7222 137.668 14.5168 136.301 15.0722C135.259 15.4909 133.994 15.7557 132.516 15.8497H132.533ZM120.631 11.287H132.644V7.31387H120.631V11.287ZM143.034 1.75146V7.79235H153.364V23.3688H160.67V7.79235H171V1.75146H143.034Z"
                      fill="#565656"
                    />
                    <path
                      d="M51.583 32.9297C51.1387 32.7075 50.6346 32.5879 50.0536 32.5879H47.7637V37.9709H50.0536C50.6346 37.9709 51.1387 37.8598 51.583 37.6291C52.0273 37.4069 52.3691 37.0908 52.6169 36.6807C52.8647 36.2791 52.9843 35.8091 52.9843 35.2708C52.9843 34.7325 52.8647 34.2711 52.6169 33.861C52.3691 33.4594 52.0273 33.1433 51.583 32.9126V32.9297ZM51.9333 36.3389C51.7539 36.6465 51.4976 36.8772 51.1729 37.0481C50.8482 37.2189 50.4552 37.3044 50.0023 37.3044H48.5412V33.2629H50.0023C50.4552 33.2629 50.8397 33.3483 51.1729 33.5192C51.4976 33.6901 51.7539 33.9208 51.9333 34.2284C52.1128 34.5275 52.2068 34.8863 52.2068 35.2879C52.2068 35.6895 52.1128 36.0398 51.9333 36.3474V36.3389ZM56.496 37.3044H59.6575V37.9709H55.7185V32.5879H59.5464V33.2544H56.496V34.9034H59.2132V35.5528H56.496V37.2873V37.3044ZM66.3221 32.5964H67.0996L64.7243 37.9794H63.9553L61.5714 32.5964H62.4088L64.3654 37.0224L66.3306 32.5964H66.3221ZM70.1073 37.3044H73.2687V37.9709H69.3297V32.5879H73.1576V33.2544H70.1073V34.9034H72.8244V35.5528H70.1073V37.2873V37.3044ZM76.8488 37.3044H79.7881V37.9709H76.0798V32.5879H76.8573V37.3044H76.8488ZM86.6321 33.3142C86.3758 33.0664 86.0682 32.8699 85.7179 32.7417C85.3676 32.605 84.9831 32.5366 84.5729 32.5366C84.1628 32.5366 83.7698 32.605 83.4194 32.7417C83.0691 32.8784 82.7615 33.0749 82.5052 33.3227C82.2489 33.5705 82.0438 33.861 81.8985 34.1942C81.7533 34.5275 81.6849 34.8949 81.6849 35.2879C81.6849 35.681 81.7533 36.0484 81.8985 36.3816C82.0438 36.7148 82.2403 37.0053 82.5052 37.2531C82.7615 37.5009 83.0691 37.6974 83.4194 37.8341C83.7698 37.9709 84.1543 38.0392 84.5729 38.0392C84.9916 38.0392 85.3676 37.9709 85.7179 37.8341C86.0682 37.6974 86.3758 37.5095 86.6321 37.2531C86.8885 37.0053 87.0935 36.7148 87.2302 36.3816C87.3755 36.0484 87.4438 35.681 87.4438 35.2794C87.4438 34.8778 87.3755 34.5189 87.2302 34.1857C87.085 33.8525 86.8885 33.5619 86.6321 33.3056V33.3142ZM86.5125 36.1082C86.41 36.356 86.2562 36.5781 86.0682 36.7661C85.8802 36.9541 85.6581 37.0993 85.4017 37.2019C85.1454 37.3044 84.8634 37.3557 84.5644 37.3557C84.2653 37.3557 83.9834 37.3044 83.7356 37.2019C83.4792 37.0993 83.2571 36.9541 83.0606 36.7661C82.8726 36.5781 82.7188 36.3645 82.6163 36.1082C82.5137 35.8604 82.4539 35.5784 82.4539 35.2879C82.4539 34.9974 82.5052 34.7154 82.6163 34.4677C82.7188 34.2199 82.8726 33.9977 83.0606 33.8097C83.2485 33.6218 83.4792 33.4765 83.7356 33.374C83.9919 33.2714 84.2653 33.2202 84.5644 33.2202C84.8634 33.2202 85.1454 33.2714 85.4017 33.374C85.6581 33.4765 85.8802 33.6218 86.0682 33.8097C86.2562 33.9977 86.4014 34.2199 86.5125 34.4677C86.615 34.7154 86.6749 34.9889 86.6749 35.2879C86.6749 35.587 86.6236 35.8604 86.5125 36.1082ZM93.5189 32.8186C93.1857 32.6733 92.7755 32.5964 92.3056 32.5964H90.1866V37.9794H90.9641V36.3474H92.3056C92.7841 36.3474 93.1857 36.2705 93.5189 36.1167C93.8521 35.9629 94.117 35.7493 94.2964 35.4673C94.4759 35.1854 94.5699 34.8522 94.5699 34.4677C94.5699 34.0832 94.4759 33.7414 94.2964 33.4594C94.117 33.1774 93.8607 32.9638 93.5189 32.81V32.8186ZM93.4078 35.3648C93.1515 35.5784 92.7755 35.681 92.28 35.681H90.9641V33.2629H92.28C92.7755 33.2629 93.1515 33.3654 93.4078 33.579C93.6642 33.7926 93.7923 34.0832 93.7923 34.4677C93.7923 34.8522 93.6642 35.1512 93.4078 35.3563V35.3648ZM103.02 32.5964V37.9794H102.285V34.0575L100.32 37.33H99.9614L98.0047 34.0832V37.9879H97.2614V32.605H97.8936L100.158 36.3816L102.388 32.605H103.02V32.5964ZM106.976 37.3044H110.138V37.9709H106.199V32.5879H110.027V33.2544H106.976V34.9034H109.693V35.5528H106.976V37.2873V37.3044ZM116.837 32.5964H117.614V37.9794H116.982L113.726 33.9721V37.9794H112.949V32.5964H113.581L116.837 36.6038V32.5964ZM124.492 32.5964V33.2629H122.63V37.9794H121.861V33.2629H119.998V32.5964H124.484H124.492Z"
                      fill="#565656"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_431_3848">
                      <rect
                        width="170.23"
                        height="37.4073"
                        fill="white"
                        transform="translate(0.769531 0.631836)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
