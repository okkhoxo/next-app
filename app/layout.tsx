import type { Metadata } from "next";
import { Gugi, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const gugi = Gugi({
  weight: "400",
  variable: "--font-gugi",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "네오버스 - 불가능을 현실로",
  description: "미래를 만드는 웹 개발 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${gugi.variable} ${notoSansKr.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
