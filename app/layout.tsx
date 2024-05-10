import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/Provider";
import { ThemeProviders } from "./providers";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Simple todo app for track your daily task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProviders>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
