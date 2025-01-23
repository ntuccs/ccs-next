// import SideColumn from '#/components/SideCloumn';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto py-12">
      {/* <SideColumn /> */}
      <div>{children}</div>
    </section>
  );
}
