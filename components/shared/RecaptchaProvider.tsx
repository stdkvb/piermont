"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const RecaptchaProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LcJw2IqAAAAANm0pDgC9TeUJTKFWPl_CpsHh0xI">
      {children}
    </GoogleReCaptchaProvider>
  );
};
