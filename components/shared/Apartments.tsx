import { Button } from "../ui";
import { ApartmentCard } from "./ApartmentCard";

type Props = {};

const apartments = [
  {
    id: 1,
    title: "2-К. ТАУНХАУС С ПАТИО",
    image: "/images/plan1.webp",
    specifications: [
      { id: 1, title: "Секция", value: "3" },
      { id: 2, title: "Площадь", value: "82 М2" },
      { id: 3, title: "Этаж", value: "5" },
      { id: 4, title: "Окна", value: "на северо-запад" },
      { id: 5, title: "Вид", value: "во двор" },
    ],
  },
  {
    id: 2,
    title: "1-К. КВАРТИРА С балконом",
    image: "/images/plan2.webp",
    specifications: [
      { id: 1, title: "Секция", value: "3" },
      { id: 2, title: "Площадь", value: "45 М2" },
      { id: 3, title: "Этаж", value: "15" },
      { id: 4, title: "Окна", value: "на юго-восток" },
      { id: 5, title: "Вид", value: "на реку и город" },
    ],
  },
  {
    id: 3,
    title: "3-К. КВАРТИРА С ТЕРРАСОЙ",
    image: "/images/plan3.webp",
    specifications: [
      { id: 1, title: "Секция", value: "3" },
      { id: 2, title: "Площадь", value: "105 М2" },
      { id: 3, title: "Этаж", value: "15" },
      { id: 4, title: "Окна", value: "на юго-восток" },
      { id: 5, title: "Вид", value: "на реку и город" },
    ],
  },
];

export const Apartments = (props: Props) => {
  return (
    <section
      id="apartments"
      className="container py-[100px] flex flex-col gap-[32px] sm:gap-[64px]"
    >
      <h2 className="header_2 text-gold">Выбрать квартиру</h2>
      <div className="flex flex-col gap-[20px] md:grid grid-cols-2 lg:flex lg:flex-row">
        {apartments.map((apartment) => {
          return <ApartmentCard data={apartment} key={apartment.id} />;
        })}
      </div>
      <Button
        variant="green"
        className="md:w-[596px] md:max-w-[596px] self-center"
      >
        Больше планировок
      </Button>
    </section>
  );
};
