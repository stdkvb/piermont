"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputMask from "react-input-mask";

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
  terms: z.literal(true, {
    errorMap: () => ({ message: "Согласие обязательно" }),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
      <div className="flex flex-col gap-[48px] w-full max-w-[934px]">
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
                        {(inputProps: any) => (
                          <Input
                            {...inputProps}
                            placeholder="+7 (000) 000-00-00"
                          />
                        )}
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
            <div className="flex flex-col gap-[24px] items-start xl:flex-row xl:justify-between">
              <Button
                variant="green"
                size="small"
                type="submit"
                className="w-full !max-w-[584px]"
              >
                Записаться на экскурсию
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};