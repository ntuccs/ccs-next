import { getPosts } from '#/lib/posts';
import { FeaturedArticle } from './HeroPrimaryArticle';
import { RelatedArticle } from './HeroSecondaryArticle';
import NewsCard from './NewsCard';
import Sidebar from './SideCloumn';

// Recent Contributors Component
export default function Hero() {
  const posts = getPosts();
  const featurePost = posts.filter((post) => post?.isHero)[0];
  const relatedPosts = posts.filter((post) => !post?.isHero).slice(1, 3);
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
      <Sidebar />
      <div className="col-span-1 space-y-6 md:col-span-3">
        <div className="mx-auto grid gap-12 px-4 py-8 lg:grid-cols-[1fr,400px]">
          <FeaturedArticle
            category={featurePost.category}
            title={featurePost.title}
            excerpt={featurePost.excerpt}
            date={featurePost.date}
            imageUrl={featurePost.thumbnail}
            href={`/news/${featurePost.id}`}
          />

          <aside className="space-y-8">
            {relatedPosts.length > 0 &&
              relatedPosts.map(({ id, title, date, excerpt, thumbnail }) => (
                <FeaturedArticle
                  key={id}
                  href={`/news/${id}`}
                  imageUrl={thumbnail}
                  title={title}
                  excerpt={excerpt}
                  date={date}
                />
              ))}
          </aside>
        </div>

        {/* 
        {posts.length >= 3 &&
          posts.map(({ id, title, date, excerpt, thumbnail }) => (
            <NewsCard
              key={id}
              slug={`/news/${id}`}
              imageUrl={thumbnail}
              imageAlt={''}
              title={title}
              description={excerpt}
              date={date}
            />
          ))} */}
      </div>
    </section>
  );
}
