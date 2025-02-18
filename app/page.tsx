import { Button } from "@/components/ui";
import {
  MainSlider,
  Slider,
  Residence,
  Panorama,
  Details,
  UniqueFormats,
  Lobby,
  Apartments,
  Presentation,
  Excursion,
  Backyard,
  RecaptchaProvider,
  ParallaxProvider,
  Header,
} from "@/components/shared";
import data from "../public/data.json";

export default function Home() {
  return (
    <>
      <Header transparent={true} />
      <main className="flex-1 bg-lightGrey">
        <MainSlider />
        <ParallaxProvider>
          <Residence />
        </ParallaxProvider>
        <Slider data={data.firstSlider} />
        <Panorama />
        <section className="container py-[64px] md:py-[160px] xl:py-[120px] flex flex-col gap-[24px] xl:flex-row xl:gap-[84px]">
          <img
            src="images/architecture.webp"
            alt="photo"
            loading="lazy"
            className="min-h-[468px] max-h-[668px] object-cover w-full"
          />
          <div className="flex flex-col gap-[24px] lg:w-[584px] xl:justify-end">
            <h2 className="header_2 text-gold">Курортная архитектура</h2>
            <p className="body_base">
              Три здания разной этажности выполнены в неоклассическом стиле
              с фасадами из натурального камня. Благодаря уникальной форме домов
              удалось добиться лучшей инсоляции и получить эксклюзивные форматы
              квартир с террасами.
            </p>
            <Button variant="black">Подробнее</Button>
          </div>
        </section>
        <Slider data={data.secondSlider} />
        <Details />
        {/* <Slider data={data.thirdSlider} /> */}

        <ParallaxProvider>
          <Backyard imageSrc="images/backyard.webp" button={true} />
        </ParallaxProvider>
        <UniqueFormats />
        <Lobby />
        <Slider data={data.fourthSlider} />
        <Apartments />
        <section className="container py-[64px] md:py-[160px] xl:py-[120px] flex flex-col gap-[24px] xl:flex-row xl:gap-[84px]">
          <div className="flex flex-col gap-[24px] w-full md:max-w-[584px] xl:justify-end">
            <h2 className="header_2 text-gold">HART-DEVELOPMENT</h2>
            <p className="body_base">
              HART Development — новое имя на рынке жилого строительства Уфы.
              Миссия компании — преображать город, создавая новое наследие
              и новую эстетику среды для жизни людей.
            </p>
            <p className="body_base">
              Мы — команда специалистов с многолетним опытом в строительстве,
              архитектуре, недвижимости и дизайне. Наши суперсилы — слышать,
              понимать людей, находить технологичные современные решения
              и создавать продуманные жилые объекты для счастливой жизни.
            </p>
            <Button variant="white">Сайт HART-DEVELOPMENT</Button>
          </div>
          <div
            className="w-full h-inherit min-h-[275px] sm:min-h-[394px] 2xl:min-h-[588px]"
            style={{
              background:
                " url('images/crane.webp') center right / cover scroll no-repeat",
            }}
          ></div>
        </section>
        <RecaptchaProvider>
          <Excursion />
        </RecaptchaProvider>
        <Presentation />
      </main>
    </>
  );
}
