import '#/styles/globals.css';
import { inter } from '#/lib/fonts';
import { Metadata } from 'next';
import Header from '#/components/Header';
import Footer from '#/components/Footer';
import { website } from '#/data/meta';

const { title, description } = website;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    title,
    description,
    images: [`/about.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className}] overflow-y-scroll antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
