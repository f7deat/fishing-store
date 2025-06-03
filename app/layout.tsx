import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiệm đồ câu Phố Cảng",
  keywords: ["câu cá", "tiệm đồ câu", "Phố Cảng", "sản phẩm câu cá"],
  description: "Tiệm đồ câu Phố Cảng - Nơi cung cấp dụng cụ câu cá chất lượng tại Hải Phòng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
