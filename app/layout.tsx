import type { Metadata } from "next";
import "./globals.scss";

import { Header, Footer, Modal, Cookies } from "@/components/shared";

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
        <Header />
        <main className="flex-1 bg-lightGrey">{children}</main>
        <Footer />
        <Modal />
        <Cookies />
      </body>
    </html>
  );
}
