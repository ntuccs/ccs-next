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
    <div className="m-auto max-w-90% space-y-8">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className="animate-fadeInUp space-y-6">
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
