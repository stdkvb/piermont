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
        {children}
        <Footer />
        <Modal />
        <Cookies />
      </body>
    </html>
  );
}
