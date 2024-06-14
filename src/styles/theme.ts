"use client";

import { Roboto } from "next/font/google";
import { Theme, createTheme } from "@mui/material/styles";
import components from "./components";
import palette from "./palette";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function getTheme(): Theme {
  return createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components,
    palette,
  });
}
