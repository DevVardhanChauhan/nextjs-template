import { PaletteMode, PaletteOptions } from "@mui/material";
import lightPalette from "./light";
import darkPalette from "./dark";

export default function getPalette(mode: PaletteMode): PaletteOptions {
  switch (mode) {
    case "dark":
      return darkPalette;
    case "light":
    default:
      return lightPalette;
  }
}
