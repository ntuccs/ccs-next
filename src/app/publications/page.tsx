import { navigation } from '#/data/meta';

// const title = navigation.publications.title;
const title = 'Publications'

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Page() {
  return (
    <div className="post-prose text-justify">
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <p>Underconstruction…</p>
    </div>
  );
}
