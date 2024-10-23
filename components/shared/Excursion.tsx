"use client";
import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputMask from "react-input-mask";
import { Loader2 } from "lucide-react";

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

export const Excursion = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      terms: false,
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://art-city.wptt.ru/api/form/excursion",
        values
      );

      if (response.status === 200) {
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setError("Произошла ошибка при отправке формы.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="container bg-white py-[64px] sm:py-[120px] flex flex-col gap-[64px] md:flex-row md:justify-between">
      <div className="max-w-[657px]">
        <img
          src="images/woman.png"
          alt="photo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-[48px] w-full max-w-[934px] relative">
        <h2 className="header_2 text-gold">Запишитесь на экскурсию</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                        <Input placeholder="+7 (000) 000-00-00" />
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

            <div className="flex flex-col gap-[24px] items-start xl:flex-row xl:justify-between xl:items-end">
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
                  "Записаться на экскурсию"
                )}
              </Button>
            </div>
            {error && <div className="text-red body_base">{error}</div>}
          </form>
        </Form>
        {success && (
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.6)) center center / cover scroll no-repeat",
            }}
          >
            <div className="w-[95%] bg-gold rounded-[10px] p-[36px] lg:p-[48px] text-white text-center card_text">
              Успешно! Мы перезвоним вам в ближайшее время!
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
