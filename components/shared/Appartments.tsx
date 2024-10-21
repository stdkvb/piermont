import { Button } from "../ui";

type Props = {};

export const Appartments = (props: Props) => {
  return (
    <section className="container py-[100px]">
      <h2 className="header_2 text-gold">Выбрать квартиру</h2>
      <Button variant="green">Больше планировок</Button>
    </section>
  );
};
