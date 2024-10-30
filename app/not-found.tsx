import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div
      className="container w-full h-screen max-h-[830px] flex flex-col justify-end items-start gap-[32px] md:flex-row md:gap-[64px] md:justify-start md:items-end pt-[230px] pb-[130px]"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/canteen.webp') center right / cover scroll no-repeat",
      }}
    >
      <h2 className="text-gold not_found">404</h2>
      <div className="flex flex-col gap-[20px] md:w-[460px]">
        <p className="card_text text-white">
          Кажется, что-то пошло не так. Давайте вернёмся на главную и найдём для
          вас идеальную квартиру в Пьермонт
        </p>
        <Button asChild variant="white" className="!max-w-full">
          <Link href="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
}
