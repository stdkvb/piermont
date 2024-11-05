import Link from "next/link";
import { Header, BreadCrumbs, Presentation } from "@/components/shared";
import { Button } from "@/components/ui";

export default function Page() {
  return (
    <>
      <Header transparent={false} />
      <main className="flex-1 bg-lightGrey">
        <BreadCrumbs
          homeElement={"Главная"}
          separator={<span className="description"> — </span>}
          activeClasses="!text-[#6D6D6D] hover:cursor-default"
          containerClasses=""
          listClasses=""
          capitalizeLinks
        />
        <div className="container pt-[24px] pb-[64px] xl:flex xl:gap-[17px] ">
          <div className="xl:flex xl:flex-col xl:justify-between xl:min-w-[433px]">
            <h1 className="header_2 text-gold mb-[32px] md:mb-[70px] xl:mb-0">
              Контакты
            </h1>
            <div className="flex flex-col gap-[32px] mb-[17px] md:grid md:grid-cols-2 md:grid-rows-2 md:grid-flow-col xl:flex xl:mb-0">
              <div className="flex flex-col gap-8px">
                <span className="demi_text">Отдел продаж</span>
                <span className="body_base text-mediumGrey">
                  г. Уфа, Зайнаб Биишевой, 23
                </span>
              </div>
              <div className="flex flex-col gap-8px">
                <span className="demi_text">Режим работы</span>
                <span className="body_base text-mediumGrey">
                  ПН-ПТ: 09:00–18:00;
                  <br />
                  СБ-ВС: выходной
                </span>
              </div>
              <div className="flex flex-col gap-8px">
                <span className="demi_text">Телефон</span>
                <Link
                  className="body_base text-mediumGrey"
                  href="tel:+73472000000"
                >
                  +7 347 200-00-00
                </Link>
              </div>
              <Button
                variant="green"
                size="small"
                asChild
                className="lg:!max-w-[328px]"
              >
                <Link href="#">Проложить маршрут</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-[17px] lg:flex-row-reverse lg:justify-end xl:flex-grow-0 lg:h-[539px]">
            <div className="rounded-[10px] overflow-hidden min-h-[343px] flex justify-center">
              <img
                className="max-w-[unset] md:w-full h-full object-cover"
                src="images/map.webp"
                loading="lazy"
              />
            </div>
            <div className="rounded-[10px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="images/buildings.webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <Presentation />
      </main>
    </>
  );
}
