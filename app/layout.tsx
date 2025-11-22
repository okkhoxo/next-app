import type { Metadata } from "next";
import { Kirang_Haerang, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const kirangHaerang = Kirang_Haerang({
  weight: "400",
  variable: "--font-kirang",
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
        className={`${kirangHaerang.variable} ${notoSansKr.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
