import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 
import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(
          "font-sans",
          fontSans.variable
        )}>
          {children}
          <Toaster />
        </body>
    </html>
  );
}