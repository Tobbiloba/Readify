import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Readify",
  description: "Your E-Book store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    suppressHydrationWarning={true}
    
    lang="en">
      <body className={font.className}>
  

        
        {children}
        <Toaster />
        
        </body>
    </html>
  );
}
