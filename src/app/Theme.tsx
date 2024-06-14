"use client";

import { useMemo } from "react";
import { CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from "@mui/material";
import getTheme from "@/styles/theme";
import { ChildrenProp } from "@/interfaces/general";

export default function Theme({ children }: ChildrenProp) {
  const defaultMode = useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light";

  const theme = useMemo(() => {
    try {
      if (!localStorage.getItem("theme")) localStorage.setItem("theme", JSON.stringify(defaultMode));
      const paletteMode = JSON.parse(localStorage.getItem("theme") || defaultMode) as PaletteMode;
      return getTheme(paletteMode);
    } catch {
      return getTheme("light");
    }
  }, [defaultMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
