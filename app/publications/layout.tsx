import Sidebar from '#/ui/sidebar';
import React from 'react';
import Image from 'next/image';

const title = 'Client Context';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4">
      <Sidebar />
      <div className="col-span-1 space-y-6 md:col-span-3">{children}</div>
    </section>
  );
}
