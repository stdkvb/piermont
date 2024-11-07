import Link from "next/link";
import { Header, BreadCrumbs } from "@/components/shared";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header transparent={false} />
      <main className="flex-1 bg-lightGrey">
        <BreadCrumbs
          homeElement={"Главная"}
          separator={<span className="description text-white"> — </span>}
          activeClasses="!text-gold hover:cursor-default"
          containerClasses="absolute"
          listClasses="text-white"
          capitalizeLinks
        />
        <div
          className="container w-full h-screen max-h-[613px] md:max-h-[830px] flex flex-col justify-between items-start gap-[32px] lg:flex-row-reverse lg:pb-[130px] lg:gap-[64px] lg:justify-end lg:items-end pt-[146px]"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/canteen.webp') center right / cover scroll no-repeat",
          }}
        >
          <div className="flex flex-col gap-[20px] md:w-[460px]">
            <p className="card_text text-white">
              Кажется, что-то пошло не так. Давайте вернёмся на главную и найдём
              для вас идеальную квартиру в Пьермонт
            </p>
            <Button asChild variant="white" className="!max-w-full">
              <Link href="/">Вернуться на главную</Link>
            </Button>
          </div>
          <h1 className="text-gold not_found">404</h1>
        </div>
      </main>
    </>
  );
}
