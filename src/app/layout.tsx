import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Wahat Almasiaf Resort Chalets | Luxury Family Escapes in Abha',
  description: 'Discover private luxury chalets in Abha. Experience tranquility, comfort, and family-friendly hospitality at Wahat Almasiaf.',
  keywords: ["chalets Abha, luxury resort, family vacation, Saudi Arabia tourism, private pool chalets"],
  openGraph: {
    "title": "Wahat Almasiaf Resort Chalets",
    "description": "Luxury family escapes in the mountains of Abha.",
    "siteName": "Wahat Almasiaf"
  },
};


const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
