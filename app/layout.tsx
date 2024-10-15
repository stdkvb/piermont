import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "ЖК Пьермонт",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
