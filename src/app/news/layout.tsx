import SideColumn from '#/components/SideCloumn';
import React from 'react';

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
    <section className="container mx-auto  py-12 ">
      {/* <SideColumn /> */}
      <div>{children}</div>
    </section>
  );
}
