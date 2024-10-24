import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback } from "react";

const useRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getRecaptchaToken = useCallback(
    async (action = "submit") => {
      if (!executeRecaptcha) {
        console.error("reCAPTCHA не загружена");
        return null;
      }
      try {
        const token = await executeRecaptcha(action);
        return token;
      } catch (error) {
        console.error("Ошибка получения reCAPTCHA токена", error);
        return null;
      }
    },
    [executeRecaptcha]
  );

  return { getRecaptchaToken };
};

export default useRecaptcha;
