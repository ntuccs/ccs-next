import { getPosts } from '#/lib/posts';
import PostCard from './HeroPrimaryArticle';
import SideCloumn from './SideCloumn';

export default function Hero() {
  const featurePost = getPosts().filter((post) => post?.isHero)[0];
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 py-6 md:grid-cols-4 md:py-12">
      <div className="order-last col-span-1 space-y-6 md:order-first">
        <SideCloumn showLinks />
      </div>
      <div className="order-first col-span-1 flex items-center justify-center space-y-6 md:order-last md:col-span-3">
        <div className="w-full">
          <PostCard
            category={featurePost.category}
            title={featurePost.title}
            excerpt={featurePost.excerpt}
            date={featurePost.date}
            imageUrl={featurePost.thumbnail}
            tags={featurePost.tags}
            href={`/news/${featurePost.id}`}
            isHero={featurePost.isHero}
          />
        </div>
      </div>
    </section>
  );
}
