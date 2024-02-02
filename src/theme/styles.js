import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      50: "#7AB6D85D",
      80: "#7AB6D89C",
      100: "#7ab6d8",
      200: "#66abd2",
      300: "#53a0cc",
      400: "#3f95c6",
      500: "#3079a2",
      600: "#245c7b",
      700: "#1f4d67",
      800: "#193e53",
      900: "#304D6D",
    },
    brandScheme: {
      100: "#E9E3FF",
      200: "#3f95c6",
      300: "#3f95c6",
      400: "#3f95c6",
      500: "#53a0cc",
      600: "#254354",
      700: "#355F77",
      800: "#193e53",
      900: "#355F77",
    },
    brandTabs: {
      100: "#E9E3FF",
      200: "#53a0cc",
      300: "#53a0cc",
      400: "#53a0cc",
      500: "#53a0cc",
      600: "#254354",
      700: "#355F77",
      800: "#193e53",
      900: "#355F77",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },
    gray: {
      100: "#FAFCFE",
    },
    yellow: {
        100: "#FFDFOD",
    }
  },
  styles: {
    global: props => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
       fontfamily: 'Plus Jakarta Sans',
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "Plus Jakarta Sans",
      },
    }),
  },
};
