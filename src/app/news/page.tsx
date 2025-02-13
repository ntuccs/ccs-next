import { getPosts } from '#/lib/posts';
import NewsCard from '#/components/NewsCard';
import { navigation } from '#/data/meta';

const title = navigation.news.title;

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Page() {
  const news = getPosts('news');

  return (
    <div className="m-auto max-w-full space-y-4 px-4 md:max-w-90% md:space-y-8 md:px-0">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className="space-y-6">
        {news.length >= 3 &&
          news.map(({ id, title, date, excerpt, thumbnail, tags }) => (
            <NewsCard
              key={id}
              slug={`/news/${id}`}
              imageUrl={thumbnail}
              imageAlt={''}
              title={title}
              description={excerpt}
              date={date}
              tags={tags}
            />
          ))}
      </div>
    </div>
  );
}
