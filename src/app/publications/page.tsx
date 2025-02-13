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
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-black">{title}</h2>
      <h3>Comming soon!!</h3>
    </div>
  );
}
