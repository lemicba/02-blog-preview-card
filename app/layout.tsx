import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['500', '800'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'Blog Preview Card',
  description: 'Emiliano Ceballos for Frontendmentor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>{children}</body>
    </html>
  );
}
