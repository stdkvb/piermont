import { Button } from "../ui";

type Props = {};

const specification = [
  { title: "Секция", value: "3" },
  { title: "Площадь", value: "45-85 М2" },
];

export const UniqueFormats = (props: Props) => {
  return (
    <section className="h-screen max-h-[1123px] flex bg-white">
      <div className="container flex items-center w-screen m-w-[820px]">
        <h2 className="header_2 text-gold">
          Уникальные
          <br className="md:hidden" />
          форматы
          <br className="hidden md:block" />
          квартир
        </h2>
      </div>
      <img
        src="/images/patio.png"
        alt="photo"
        className="w-screen max-w-[960px] object-cover"
      />
      <div className="container flex flex-col items-center justify-center gap-[40px] w-screen m-w-[820px] py-[48px]">
        <img src="/images/plan1.png" alt="plan" />
        <p className="header_4 text-gold uppercase">
          Двухуровневый пентхаус с патио
        </p>
        <ul className="w-[368px] flex flex-col gap-[10px]">
          {specification.map((spec) => {
            return (
              <li key={spec.title} className="flex justify-between">
                <span className="text-grey body_base uppercase">
                  {spec.title}
                </span>
                <span className="text-darkGrey body_base uppercase">
                  {spec.value}
                </span>
              </li>
            );
          })}
        </ul>
        <Button variant="gold">Выбрать пентхаус с патио</Button>
      </div>
      <div
        className="w-screen h-full max-w-[1100px] flex flex-col justify-center"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('/images/room.png') center center / cover scroll no-repeat",
        }}
      >
        <div className="container py-[48px] flex flex-col items-start justify-between h-full max-h-[740px]">
          <h2 className="header_2 text-white">
            Найдите
            <br />
            свою идеальную
            <br />
            квартиру
          </h2>
          <Button variant="gold">Посмотреть все планировки</Button>
        </div>
      </div>
    </section>
  );
};
