"use client";

import { Roboto } from "next/font/google";
import { Theme, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import components from "./components";
import getPalette from "./palette";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function getTheme(mode: PaletteMode): Theme {
  const palette = getPalette(mode);

  return createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    palette,
    components,
  });
}
