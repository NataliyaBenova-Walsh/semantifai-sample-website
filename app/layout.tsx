import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageHeader from "@/components/modules/01-page-header/page-header";
import PageFooter from "@/components/modules/02-page-footer/page-footer";
import { Main } from "@/components/common/02-page-ui/main";
import { ThemeProvider } from "@/components/theme-provider";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/

export const metadata: Metadata = {
  title: "Semantifai",
  description: "Semantifai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <PageHeader />
      <main>{children}</main>
      <PageFooter />
      </ThemeProvider>
      </body>
    </html>
  );
}
