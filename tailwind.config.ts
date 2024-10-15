import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#B9916A",
        green: "#193232",
        grey: "#343330",
        semilightGrey: "#ECECEC",
        lightGrey: "#F5F5F5",
        darkGrey: "#303030",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".header_1": {
          fontFamily: "MoniqaNarrowParagraph",
          fontWeight: "400",
          fontSize: "8rem",
          lineHeight: "80%",
          color: theme("colors.darkGrey"),
          "@media (max-width: 640px)": {
            fontSize: "4rem",
          },
        },
        ".header_2": {
          fontFamily: "MoniqaNarrowParagraph",
          fontWeight: "400",
          fontSize: "5.25rem",
          lineHeight: "100%",
          color: theme("colors.darkGrey"),
          "@media (max-width: 640px)": {
            fontSize: "3rem",
          },
        },
        ".header_3": {
          fontFamily: "MoniqaNarrowParagraph",
          fontWeight: "400",
          fontSize: "3rem",
          lineHeight: "100%",
          color: theme("colors.darkGrey"),
          "@media (max-width: 640px)": {
            fontSize: "2rem",
          },
        },
        ".header_4": {
          fontFamily: "MoniqaNarrowParagraph",
          fontWeight: "400",
          fontSize: "2rem",
          lineHeight: "100%",
          color: theme("colors.darkGrey"),
        },
        ".card_text": {
          fontFamily: "FuturaPTBook",
          fontWeight: "450",
          fontSize: "1.75rem",
          lineHeight: "120%",
          color: theme("colors.darkGrey"),
          "@media (max-width: 640px)": {
            fontSize: "1.25rem",
          },
        },
        ".demi_text": {
          fontFamily: "FuturaPTDemi",
          fontWeight: "500",
          fontSize: "1.25rem",
          lineHeight: "120%",
          color: theme("colors.darkGrey"),
        },
        ".body_base": {
          fontFamily: "FuturaPTBook",
          fontWeight: "400",
          fontSize: "1.25rem",
          lineHeight: "120%",
          color: theme("colors.darkGrey"),
          "@media (max-width: 640px)": {
            fontSize: "1rem",
          },
        },
        ".link": {
          fontFamily: "FuturaPTBook",
          fontWeight: "400",
          fontSize: "1.25rem",
          lineHeight: "120%",
          color: theme("colors.darkGrey"),
          textDecoration: "underline",
          "@media (max-width: 640px)": {
            fontSize: "1rem",
          },
        },
        ".button_text": {
          fontFamily: "FuturaPTMedium",
          fontWeight: "450",
          fontSize: "1rem",
          lineHeight: "auto",
          color: theme("colors.darkGrey"),
          textTransform: "uppercase",
          "@media (max-width: 640px)": {
            fontSize: "0.75rem",
          },
        },
        ".description": {
          fontFamily: "FuturaPTMedium",
          fontWeight: "300",
          fontSize: "0.875rem",
          lineHeight: "110%",
          color: theme("colors.darkGrey"),
          "@media (max-width: 640px)": {
            fontSize: "0.75rem",
          },
        },
        ".description_link": {
          fontFamily: "FuturaPTMedium",
          fontWeight: "300",
          fontSize: "0.875rem",
          lineHeight: "110%",
          color: theme("colors.darkGrey"),
          textDecoration: "underline",
          "@media (max-width: 640px)": {
            fontSize: "0.75rem",
          },
        },
        ".container": {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          maxWidth: "unset",
          "@media (min-width: 640px)": {
            paddingLeft: "2.125rem",
            paddingRight: "2.125rem",
          },
          "@media (min-width: 1024px)": {
            paddingLeft: "4rem",
            paddingRight: "4rem",
          },
        },
      });
    }),
  ],
};
export default config;
