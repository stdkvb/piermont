"use client";
import { ParallaxProvider as Parallax } from "react-scroll-parallax";

export const ParallaxProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Parallax>{children}</Parallax>;
};
