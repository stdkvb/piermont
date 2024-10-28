"use client";

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { Button } from "../ui";

export const Cookies = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="container bg-lightGrey py-[24px] flex flex-col gap-[24px] fixed z-20 bottom-0 left-0 w-full sm:flex-row sm:items-center sm:justify-between md:gap-[100px]">
      <span className="body_base">
        Мы собираем cookie, чтобы сайт был удобнее. Продолжая использовать сайт,
        вы соглашаетесь с{" "}
        <Link
          href="#"
          target="_blank"
          className="body_base text-gold underline underline-offset-4"
        >
          Политикой конфиденциальности
        </Link>
      </span>
      <Button
        variant="roundedGreen"
        size="small"
        onClick={() => acceptCookie()}
        className="w-[263px]"
      >
        Хорошо
      </Button>
    </div>
  );
};
