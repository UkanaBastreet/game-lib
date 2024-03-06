import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { CSSProperties } from "react";
import { PageWithTitledHeader } from "@/components/PageWithTitledHeader";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={bodyStyles}>
        <Navbar />
        <PageWithTitledHeader title={metadata.title?.toString()}>
          {children}
        </PageWithTitledHeader>
      </body>
    </html>
  );
}
const bodyStyles: CSSProperties = {
  display: "flex",
};
