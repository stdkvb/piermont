"use client";
import Link from "next/link";
import { useModalStore } from "@/store/modal";
import { CallBackForm } from "./CallBackForm";

import { Logo } from "@/components/ui";

export const Footer = () => {
  const { openModal } = useModalStore();
  return (
    <footer className="container py-12 md:pt-[100px] md:pb-[60px] bg-green flex flex-col items-center gap-[32px] md:gap-[64px]">
      <div className="flex flex-col items-center gap-[13px] sm:gap-[24px] sm:flex-row sm:justify-between sm:w-full">
        <Logo color="#B9916A" large={true} />
        <div className="flex flex-col items-center gap-[12px] sm:gap-[24px] sm:items-end">
          <Link
            href="tel:+7 347 200-00-00"
            className="block text-white card_text text-[32px] sm:text-[28px]"
          >
            +7 347 200-00-00
          </Link>
          <div
            className="block text-white link cursor-pointer"
            onClick={() => openModal(<CallBackForm />)}
          >
            Заказать звонок
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 sm:gap-16 md:w-full lg:flex-row lg:items-center lg:justify-between">
        <nav className="flex flex-col gap-[32px] items-center sm:items-start md:flex-1">
          <Link href="/" className="card_text text-white">
            Главная
          </Link>
          <Link href="#" className="card_text text-white">
            Архитектура и благоустройство
          </Link>
          <Link href="#apartments" className="card_text text-white">
            Выбрать квартиру
          </Link>
          <Link href="/contacts" className="card_text text-white">
            Контакты
          </Link>
        </nav>
        <div className="flex flex-col gap-[8px] items-center sm:items-start md:max-w-[580px] lg:items-end">
          <span className="body_base text-white">
            © 2011–2023, Строительная компания HART
          </span>
          <span className="description text-white text-center sm:text-left lg:text-right opacity-[0.3]">
            Любая информация, представленная на данном сайте, носит
            исключительно информационный характер и ни при каких условиях
            не является публичной офертой, определяемой положениями статьи
            437 ГК РФ. Раскрытие информации ООО «АРТ-СИТИ» также доступно в сети
            Интернет на странице информационного агентства, аккредитованного
            ЦБ РФ на раскрытие информации — ООО«Интерфакс-ЦРКИ».
          </span>
          <Link href="#" className="description_link text-white opacity-[0.3]">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};
