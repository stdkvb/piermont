import Link from "next/link";
import {
  Header,
  BreadCrumbs,
  Excursion,
  Presentation,
} from "@/components/shared";
import { Button } from "@/components/ui";

export default function Page() {
  return (
    <>
      <Header transparent={false} />
      <main className="flex-1 bg-lightGrey">
        <BreadCrumbs
          homeElement={"Главная"}
          separator={<span className="description "> — </span>}
          activeClasses="!text-gold hover:cursor-default"
          containerClasses=""
          listClasses=""
          capitalizeLinks
        />
        <h1 className="header_2 text-gold container invisible h-0 md:mb-[44px] md:h-fit md:visible">
          Выбрать квартиру
        </h1>
        <section className="md:container md:flex md:gap-[20px] md:pb-[120px]">
          <div
            className="container w-full aspect-[375/462] flex justify-center items-center sm:aspect-[768/682] md:aspect-[887/587]"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/canteen.webp') center center / cover scroll no-repeat",
            }}
          >
            <Link href="#" className="header_2 text-white">
              по параметрам
            </Link>
          </div>
          <div
            className="container w-full aspect-[375/462] flex justify-center items-center sm:aspect-[768/682] md:aspect-[887/587]"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/bedroom.webp') center center / cover scroll no-repeat",
            }}
          >
            <Link href="#" className="header_2 text-white">
              на плане
            </Link>
          </div>
        </section>

        <Excursion />
        <Presentation />
      </main>
    </>
  );
}
