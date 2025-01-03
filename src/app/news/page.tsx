import { getPosts } from '#/lib/posts';
import NewsCard from '#/components/NewsCard';

export default function Page() {
  const news = getPosts('news');

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-black">NEWS</h2>
      <div className="col-span-1 space-y-6 md:col-span-2">
        {news.length >= 3 &&
          news.map(({ id, title, date, excerpt, thumbnail }) => (
            <NewsCard
              key={id}
              slug={`/news/${id}`}
              imageUrl={thumbnail}
              imageAlt={''}
              title={title}
              description={excerpt}
              date={date}
            />
          ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* <article>
          <Image
            src="/hydrogen-ecosystem.jpg"
            fill={true}
            alt="Regional partnerships"
            className="h-auto w-full rounded object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold leading-tight">
            Regional partnerships can power a resilient Asia Pacific hydrogen
            ecosystem
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Tsaiying Lu, Sonia Su, Alex Liu, Chen-Yen Chang, Elizabeth Frost
          </p>
        </article>
        <article>
          <Image
            src="/asean-eu.jpg"
            fill={true}
            alt="Stronger cultural ties"
            className="h-auto w-full rounded object-cover"
          />
          <h3 className="mt-4 text-lg font-semibold leading-tight">
            Stronger cultural ties needed to deepen ASEAN-EU cooperation in a
            polarised world
          </h3>
          <p className="mt-2 text-sm text-gray-600">David Ocon, Lluis Bonet</p>
        </article> */}
      </div>
    </div>
  );
}
