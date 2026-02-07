import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Izabella de Bourbon",
  description: "Site Advogada Izabella de Bourbon, atua no Paraná, Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={greatVibes.variable}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17936768030"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17936768030');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
