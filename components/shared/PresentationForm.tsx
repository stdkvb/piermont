"use client";
import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputMask from "react-input-mask";
import { Loader2 } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Checkbox,
} from "@/components/ui";

import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Обязательное поле",
  }),
  phone: z.string().min(18, {
    message: "Введите корректный номер телефона",
  }),
  email: z.string().email({
    message: "Введите корректный email",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "Согласие обязательно",
  }),
});

export const PresentationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      terms: false,
    },
  });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [presentationLink, setPresentationLink] = useState<string>("");

  const onSubmit = async (values: any) => {
    setLoading(true);
    setError(null);

    try {
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA не загружена");
      }

      const recaptchaToken = await executeRecaptcha();
      if (!recaptchaToken) {
        throw new Error("Не удалось получить reCAPTCHA токен");
      }

      const response = await axios.post(
        "https://art-city.wptt.ru/api/form/get-presentation",
        {
          ...values,
          g_recaptcha_response: recaptchaToken,
        }
      );

      if (response.status === 200) {
        setPresentationLink(response.data.presentationLink);
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setError("Произошла ошибка при отправке формы.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-[48px] justify-between w-full h-full sm:max-h-[424px] sm:items-center sm:max-w-[600px] 2xl:max-w-[934px]">
      <h4 className="text-gold header_2">Получить презентацию</h4>
      {!success && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between gap-[20px]">
                    <FormLabel className="!card_text">Ваше&nbsp;имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Введите ваше имя" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage className="!body_base !text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between gap-[20px]">
                    <FormLabel className="!card_text">Телефон</FormLabel>
                    <FormControl>
                      <InputMask
                        mask="+7 (999) 999-99-99"
                        value={field.value}
                        onChange={field.onChange}
                      >
                        <Input placeholder="+7 (000) 000-00-00" type="tel" />
                      </InputMask>
                    </FormControl>
                  </div>
                  <FormMessage className="!body_base !text-red" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between gap-[20px]">
                    <FormLabel className="!card_text">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email@mail.ru" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage className="!body_base !text-red" />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-[24px] items-start md:flex-row md:justify-between md:items-end">
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                      <label
                        htmlFor="terms"
                        className="body_base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Согласен&nbsp;на&nbsp;
                        <Link href="#" target="_blank" className="link">
                          обработку&nbsp;данных
                        </Link>
                      </label>
                    </div>
                    <FormMessage className="!body_base !text-red" />
                  </FormItem>
                )}
              />
              <Button
                variant="green"
                size="small"
                type="submit"
                className="w-full !max-w-[584px]"
              >
                {loading ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  "Получить презентацию"
                )}
              </Button>
            </div>
            {error && <div className="text-red body_base">{error}</div>}
          </form>
        </Form>
      )}
      {success && (
        <div className="w-full flex flex-col items-start sm:items-center gap-[24px]">
          <div className="card_text sm:text-center">
            Успешно! Вы можете скачать
            <br />
            презентацию по ссылке ниже
          </div>
          <Button
            asChild
            variant="green"
            size="small"
            className="!max-w-[600px]"
          >
            <Link href={presentationLink} download target="_blank">
              Скачать презентацию
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};
