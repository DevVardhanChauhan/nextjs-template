"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider } from "jotai";
import "./globals.css";
import { Children } from "@/interfaces/general";
import Theme from "./Theme";
import AppLayout from "./AppLayout";

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme>
            <Provider>
              <AppLayout>{children}</AppLayout>
            </Provider>
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
