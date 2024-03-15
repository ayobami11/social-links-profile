import type { Metadata } from "next";

import { interFont, interVariableFont } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ayobami Tunwase | Social Profile Links",
  description: "Ayobami Tunwase's social profile links",
  authors: { name: 'Ayobami Tunwase', url: 'https://ayobami-tunwase.vercel.app' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interVariableFont.variable} ${interFont.variable}`}>
      <body className='font-primary text-white bg-off-black'>{children}</body>
    </html>
  );
}
