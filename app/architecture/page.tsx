import {
  Header,
  Excursion,
  Presentation,
  Lobby,
  Backyard,
  ParallaxProvider,
  Slider,
  Materials,
  Oasis,
} from "@/components/shared";

import data from "../../public/data.json";

export default function Page() {
  return (
    <>
      <Header transparent={true} />
      <main className="flex-1 bg-lightGrey">
        <section
          className="container w-full h-screen flex items-center justify-center"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('images/front.webp') center right / cover scroll no-repeat",
          }}
        >
          <h1 className="header_2 xl:!text-[180px] text-white text-center">
            Архитектура
            <br />
            вне времени
          </h1>
        </section>
        <section className=" pt-[60px] pb-[32px] flex flex-col gap-[34px] sm:py-[120px] xl:flex-row xl:justify-center xl:gap-[64px] xl:items-center">
          <h2 className="container header_1 text-gold xl:pr-0 xl:text-right">
            навстречу <br className="hidden" />
            южному
            <br />
            солнцу
          </h2>
          <p className="container body_base xl:order-3 xl:pl-0">
            В основу концепции формы домов легла идея идеальной инсоляции.
            Вы будете жить на южном склоне горы, с прекрасной
            светопроницаемостью двора, в светлой квартире с видами на набережную
            и акваторию Белой. В месте, где весна наступает чуточку раньше,
            а вместо осени вы встречаете бархатный сезон.
          </p>
          <div className="hidden sm:block xl:order-2 sm:aspect-auto">
            <img
              src="images/airview.webp"
              loading="lazy"
              alt="photo"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <Oasis />
        <Materials />
        <ParallaxProvider>
          <Backyard imageSrc="images/garden.webp" button={false} />
        </ParallaxProvider>
        <section className="container py-[64px] md:py-[160px] xl:py-[120px] flex flex-col gap-[24px] xl:flex-row xl:gap-[84px]">
          <img
            src="images/architecture.webp"
            alt="photo"
            loading="lazy"
            className="min-h-[468px] max-h-[668px] object-cover w-full"
          />
          <div className="flex flex-col gap-[24px] lg:w-[584px] xl:justify-end">
            <h2 className="header_2 text-gold">
              Закрытый
              <br />
              ландшафтный
              <br />
              двор-парк
            </h2>
            <p className="body_base">
              Дом расположен на склоне горы, который естественным образом
              создаёт приватное пространство. Ландшафт во внутреннего двора
              создаётся террасами и плавными линиями тропинок. А дополнительную
              приватность обеспечивают крытые переходы в виде мостиков
              между зданиями.
            </p>
          </div>
        </section>
        <Lobby />
        <section className="py-[64px] md:py-[160px] md:pb-0 xl:py-[120px] flex flex-col gap-[24px] xl:flex-row xl:gap-[84px]">
          <div className="container flex flex-col gap-[24px] w-full md:max-w-[584px] xl:justify-end">
            <h2 className="header_2 text-gold">
              Лучше, чем
              <br />
              5-звездочный отель
            </h2>
            <p className="body_base">
              В каждом из домов расположены лобби выполненные в разных стилях.
              В каждом лобби есть зона ресепшн, зоны ожидания, велосипедные
              и колясочные, лапомойки и туалеты. А в главном лобби расположены
              целых три этажа приватных пространств, доступных только
              для жильцов клубной резиденции Пьермонт.
            </p>
          </div>
          <div
            className="w-full h-inherit min-h-[275px] sm:min-h-[508px] 2xl:min-h-[788px]"
            style={{
              background:
                " url('images/reception.webp') center right / cover scroll no-repeat",
            }}
          ></div>
        </section>
        <section className="w-full h-screen">
          <img
            src="images/drops.webp"
            alt="photo"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </section>
        <Slider data={data.fifthSlider} />
        <section className="py-[64px] md:py-[160px] xl:pt-[120px] xl:pb-[240px] flex flex-col gap-[24px] xl:flex-row md:gap-[84px] 2xl:gap-[172px]">
          <div className="w-full flex gap-[24px]">
            <div
              className="w-full h-inherit min-h-[252px] sm:min-h-[508px] xl:min-h-[433px] 2xl:max-w-[816px]"
              style={{
                background:
                  " url('images/stones.webp') center right / cover scroll no-repeat",
              }}
            ></div>
            <div
              className="hidden w-full h-inherit  2xl:block 2xl:min-h-[433px] 2xl:max-w-[412px]"
              style={{
                background:
                  " url('images/ficus.webp') center right / cover scroll no-repeat",
              }}
            ></div>
          </div>
          <div className="container flex flex-col gap-[24px] w-full md:max-w-[584px] xl:justify-end xl:pl-0">
            <h2 className="header_2 text-gold">Эстетика и стиль</h2>
            <p className="body_base">
              Лобби выполнены в стилистике курортных отелей. С напольным
              покрытием, объединяющим зону двора и лобби, дизайнерскими
              винтовыми лестницами, арт-объектами, деревьями и панорамными
              окнами.
            </p>
          </div>
        </section>
        <Excursion />
        <Presentation />
      </main>
    </>
  );
}
