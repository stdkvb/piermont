import Image from "next/image";
import { Button } from "@/components/ui";
import {
  MainSlider,
  Slider,
  Residence,
  Panorama,
  Details,
  UniqueFormats,
} from "@/components/shared";
import { Parallax } from "@/components/ui/ParallaxProvider";
import data from "../public/data.json";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Parallax>
        <Residence />
      </Parallax>
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
      <UniqueFormats />
      <section
        className="h-screen max-h-[1080px] flex flex-col justify-end pb-[32px] md:pb-[64px]"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('images/backyard.jpeg') center center / cover scroll no-repeat",
        }}
      >
        <div className="container flex flex-col gap-[48px] md:flex-row md:justify-between lg:gap-[164px] md:items-end">
          <h2 className="header_2 text-white">Двор&nbsp;мечты</h2>
          <p className="body_base text-white">
            Закрытый террасированный двор-парк — настоящее чудо света.
            Он разделён на множество зон, как для игр детей разного возраста,
            так и на зоны тихого отдыха и даже зоны для интеллектуальных игр.
            Но самое главное он расположен на разных уровнях с мостиками,
            плавными линиями тропинок и арт-объектами создающими ощущение
            слияния с природой, приватности и гармонии.
          </p>
          <Button variant="gold">узнать подробнее</Button>
        </div>
      </section>
      <section className="container py-[64px] md:py-[160px] xl:py-[120px] flex flex-col gap-[24px] xl:flex-row xl:gap-[84px]">
        <div className="flex flex-col gap-[24px] lg:w-[584px] xl:justify-end">
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
        <img
          src="images/crane.png"
          alt="photo"
          className="min-h-[275px] max-h-[588px] object-cover w-full"
        />
      </section>
    </>
  );
}
