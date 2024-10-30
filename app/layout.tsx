import type { Metadata } from "next";
import "./globals.scss";

import {
  Header,
  Footer,
  Modal,
  Cookies,
  BreadCrumbs,
} from "@/components/shared";

export const metadata: Metadata = {
  title: "ЖК Пьермонт",
  description: "жилой комплекс Пьермонт",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className="antialiased min-h-screen flex flex-col"
        suppressHydrationWarning={true}
      >
        <Header transparent={false} />
        {/* <BreadCrumbs
          homeElement={"Главная"}
          separator={<span className="description"> — </span>}
          activeClasses="text-[#6D6D6D] hover:cursor-default"
          containerClasses=""
          listClasses=""
          capitalizeLinks
        /> */}
        <main className="flex-1 bg-lightGrey">{children}</main>
        <Footer />
        <Modal />
        <Cookies />
      </body>
    </html>
  );
}
