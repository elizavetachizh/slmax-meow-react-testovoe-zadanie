"use client";
import "../globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import styles from "../page.module.css";
import theme from "@/src/theme";
import {AppProvider} from "@/src/context/AppContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <main className={styles.main}>{children}</main>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
