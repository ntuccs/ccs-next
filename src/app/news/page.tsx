import { getPosts } from '#/lib/posts';
import NewsCard from '#/components/NewsCard';

export default function Page() {
  const news = getPosts('news');

  return (
    <div className="m-auto max-w-4/5 space-y-8">
      <h1 className="text-3xl font-bold text-black">News & Events</h1>
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
