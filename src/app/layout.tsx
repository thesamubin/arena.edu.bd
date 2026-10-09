import type { Metadata } from "next";
import "./globals.css";
import { Inter, Lora } from "next/font/google";
import { InstitutionalHeader } from "@/components/layout/InstitutionalHeader";
import { InstitutionalFooter } from "@/components/layout/InstitutionalFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arenawebsecurity.edu.bd"),
  title: {
    default: "Arena Web Security — Applied Cybersecurity Institute",
    template: "%s | Arena Web Security",
  },
  description:
    "Official academic portal of Arena Web Security (arenawebsecurity.edu.bd). Professional diplomas, hands-on penetration testing laboratories, corporate cyber defense, and applied security research.",
  keywords: [
    "cybersecurity institute Bangladesh",
    "arena web security",
    "arenawebsecurity.edu.bd",
    "ethical hacking diploma",
    "penetration testing Bangladesh",
    "VAPT",
    "OSINT training",
  ],
  authors: [{ name: "Arena Web Security", url: "https://www.arenawebsecurity.edu.bd" }],
  creator: "Arena Web Security",
  publisher: "Arena Web Security",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-academic-warm text-academic-ink-primary antialiased">
        {/* Top bars removed to clean up the header area */}
        <InstitutionalHeader />
        <main className="flex-1">{children}</main>
        <InstitutionalFooter />
      </body>
    </html>
  );
}
