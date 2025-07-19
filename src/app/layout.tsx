import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shashank Korthiwada - Full Stack Developer",
  description: "Full Stack Software Developer passionate about creating innovative solutions and sharing knowledge with the community.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Software Engineer", "Web Development"],
  authors: [{ name: "Shashank Korthiwada" }],
  creator: "Shashank Korthiwada",
  openGraph: {
    title: "Shashank Korthiwada - Full Stack Developer",
    description: "Full Stack Software Developer passionate about creating innovative solutions and sharing knowledge with the community.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Korthiwada - Full Stack Developer",
    description: "Full Stack Software Developer passionate about creating innovative solutions and sharing knowledge with the community.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://shashank-korthiwada.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
