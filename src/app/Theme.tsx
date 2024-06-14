"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import getTheme from "@/styles/theme";
import { Children } from "@/interfaces/general";

export default function Theme({ children }: Children) {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
