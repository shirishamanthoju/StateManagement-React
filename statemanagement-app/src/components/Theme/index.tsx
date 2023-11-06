import { createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h4: React.CSSProperties;
    h6: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    button: React.CSSProperties;
    overline: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h4?: React.CSSProperties;
    h6?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    button?: React.CSSProperties;
    overline?: React.CSSProperties;
  }
  interface Palette {
    primary: Palette["primary"];
    greyColors: Palette["primary"];
    semantic: Palette["primary"];
    textColor: Palette["primary"];
  }
  interface PaletteOptions {
    primary?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    semantic?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
  }
  interface Color {
    primary100?: string;
    primary300?: string;
    primary500?: string;
    primary700?: string;
    primary900?: string;
    success100?: string;
    success500?: string;
    warning100?: string;
    warning300?: string;
    error100?: string;
    error500?: string;
    grey50?: string;
    grey100?: string;
    grey300?: string;
    grey500?: string;
    grey700?: string;
    grey900?: string;
    lowEmphasis?: string;
    mediumEmphasis?: string;
    highEmphasis?: string;
    greyWhite?: string;
    orange?: string;
    grey?: string;
    pink?: string;
    lightBlue?: string;
    lightGreen?: string;
    darkGrey?: string;
    lightYellow?: string;
  }

  interface PaletteColor extends Color {}

  interface SimplePaletteColorOptions extends Color {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h4: true;
    h6: true;
    subtitle1: true;
    subtitle2: true;
    body1: true;
    body2: true;
    caption1: true;
    caption2: true;
    overline: true;
  }
}

export const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  typography: {
    h4: {
      fontFamily: "Graphik",
      fontWeight: 500,
      fontSize: "40px",
      lineHeight: "54px",
      letterSpacing: "-1%",
    },
    h6: {
      fontFamily: "Graphik",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "34px",
    },
    subtitle1: {
      fontFamily: "Graphik",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.5%",
    },
    subtitle2: {
      fontFamily: "Graphik",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.5%",
    },
    body1: {
      fontFamily: "Graphik",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "1%",
    },
    body2: {
      fontFamily: "Graphik",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "1%",
    },
    button: {
      fontFamily: "Graphik",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "42px",
      letterSpacing: "1%",
      color: "#FFFFFF",
    },
    caption1: {
      fontFamily: "Graphik",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "1%",
    },
    caption2: {
      fontFamily: "Graphik",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "1%",
    },
    overline: {
      fontFamily: "Graphik",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14px",
      letterSpacing: "0.5%",
    },
  },
  palette: {
    primary: {
      main: "#0052FF",
      primary100: "#FAFCFF",
      primary300: "#CCE3FF",
      primary500: "#0052FF",
      primary700: "#002EB7",
      primary900: "#00177A",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#FFFFFF",
      orange: "#F7931A33",
      grey: " #22222233",
      pink: "#E6007A33",
      lightBlue: "#627EEA33",
      lightGreen: "#26A17B33",
      darkGrey: "#19197133",
      lightYellow: "#DBC98433",
    },
    semantic: {
      main: "#FFFFFF",
      success100: "#E9F7EC",
      success500: "#20B03F",
      warning100: "#FFF6ED",
      warning300: "#FFA74F",
      error100: "#F3E6EB",
      error500: "#B71A33",
    },
    greyColors: {
      main: "#FFFFFF",
      grey50: "#F2F2F7",
      grey100: "#E8E8F7",
      grey300: " #B4B4CF",
      grey500: "#4B4B60",
      grey700: "#252545",
      grey900: "#0E0E2E",
    },
    textColor: {
      main: "#FFFFFF",
      lowEmphasis: " #B2B2B9",
      mediumEmphasis: "#7D7D89",
      highEmphasis: " #343446",
    },
  },
});

export default theme;