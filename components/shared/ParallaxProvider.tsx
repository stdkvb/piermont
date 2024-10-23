"use client";
import { ParallaxProvider } from "react-scroll-parallax";

export const Parallax = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};
