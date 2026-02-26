import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { createSeoMetadata } from "@/components/SeoMeta";
import { siteConfig } from "@/config/site";
import "./globals.css";

const baseMetadata = createSeoMetadata(siteConfig);

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
