import type { Metadata, Viewport } from "next";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3010"),
  title: "Jay's Ice Cream Shop CT | Over 40 Delicious Flavors",
  description: "Jay's Ice Cream Shop in Connecticut offers over 40 homemade flavors, floats, milkshakes, sundaes, and warmful delights in a family-friendly atmosphere. Visit us today!",
  icons: {
    icon: '/logo.JPG',
  },
  keywords: ['ice cream', 'dessert', 'Connecticut', 'sweet treats', 'ice cream shop', 'homemade', 'milkshakes', 'floats', 'sundaes', 'local business'],
  authors: [{ name: 'Jay\'s Ice Cream Shop' }],
  creator: 'Jay\'s Ice Cream Shop',
  openGraph: {
    title: 'Jay\'s Ice Cream Shop CT | Over 40 Delicious Flavors',
    description: 'Cool treats, warmer vibes — Over 40 flavors, floats, milkshakes & warmful delights!',
    images: ['/logo.JPG'],
    type: 'website',
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ff6ba1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fredoka.variable} ${poppins.variable} font-poppins antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
