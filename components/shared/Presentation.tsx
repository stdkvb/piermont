import { Button } from "../ui";

type Props = {};

export const Presentation = (props: Props) => {
  return (
    <section className="container bg-gold py-[48px] sm:py-[56px] lg:py-[66px] flex flex-col gap-[32px] sm:gap-[64px] md:flex-row justify-between">
      <span className="card_text text-green">
        Хотите узнать больше?
        <br />
        Получите презентацию проекта
      </span>
      <Button variant="black" size="small">
        Получить презентацию
      </Button>
    </section>
  );
};
