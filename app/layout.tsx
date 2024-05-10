import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { cn } from "@/lib/utils";
import { ThemeProvider, Toaster } from "@/components/shared/ui";
import { ModeToggle } from "@/components/Features/ModeToggle/ModeToggle";

export const metadata: Metadata = {
  title: "Multi-step Registration Form",
  description: "Simple registration form in Next.js, using Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          "min-h-screen flex bg-background justify-center items-center font-sans antialiased",
          fontSans.variable
        )}
      >
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-5">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
