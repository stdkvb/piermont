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
} from "@/components/shared";
import data from "../public/data.json";

export default function Home() {
  return (
    <>
      <MainSlider />
      <ParallaxProvider>
        <Residence />
      </ParallaxProvider>
      <Slider data={data.firstSlider} />
      <Panorama />
      <section className="container py-[64px] md:py-[160px] xl:py-[120px] flex flex-col gap-[24px] xl:flex-row xl:gap-[84px]">
        <img
          src="images/architecture.jpeg"
          alt="photo"
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
      <ParallaxProvider>
        <Backyard />
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
            Миссия компании — преображать город, создавая новое наследие и новую
            эстетику среды для жизни людей.
          </p>
          <p className="body_base">
            Мы — команда специалистов с многолетним опытом в строительстве,
            архитектуре, недвижимости и дизайне. Наши суперсилы — слышать,
            понимать людей, находить технологичные современные решения
            и создавать продуманные жилые объекты для счастливой жизни.
          </p>
          <Button variant="white">Сайт HART-DEVELOPMENT</Button>
        </div>
        <div className="min-h-[275px] max-h-[588px]">
          <img
            src="images/crane.png"
            alt="photo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <RecaptchaProvider>
        <Excursion />
      </RecaptchaProvider>

      <Presentation />
    </>
  );
}
