import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Jude Eseka | Frontend Engineer",
  description: "Explore the portfolio of Jude Eseka, a frontend engineer focused on building responsive, accessible, and high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="google-site-verification" content="9YmoTh_yubVvgeaMaVd685-8aE1AGKxm2l3KB97QLkk" />
      </Head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors />
          </ThemeProvider>

      </body>
    </html>
  );
}
