"use client";
import { Button } from "../ui";
import { useModalStore } from "@/store/modal";
import { PresentationForm } from "./PresentationForm";
import { RecaptchaProvider } from "./RecaptchaProvider";

type Props = {};

export const Presentation = (props: Props) => {
  const { openModal } = useModalStore();
  return (
    <section className="container bg-gold py-[48px] sm:py-[56px] lg:py-[66px] flex flex-col items-start gap-[32px] sm:gap-[64px] xl:flex-row justify-between">
      <span className="card_text text-green">
        Хотите узнать больше?
        <br />
        Получите презентацию проекта
      </span>
      <Button
        variant="black"
        size="small"
        onClick={() =>
          openModal(
            <RecaptchaProvider>
              <PresentationForm />
            </RecaptchaProvider>
          )
        }
      >
        Получить презентацию
      </Button>
    </section>
  );
};
