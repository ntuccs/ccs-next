import Link from 'next/link';
import navigations from '#/data/navigations';
import { getPosts, Post } from '#/lib/posts';
import FeaturedArticle from './HeroPrimaryArticle';

interface SideColumProps {
  title?: string;
  showLinks?: boolean;
  postNumbers?: number;
  // postData?: Post[];
  excludeSlug?: string;
}

export default function SideCloumn({
  title = 'Latest',
  showLinks = false,
  postNumbers = 2,
  excludeSlug = '',
}: SideColumProps) {
  const latestPosts = getPosts()
    .filter((post) => !post?.isHero)
    .filter((post) => (excludeSlug ? post.id !== excludeSlug : post))
    .slice(0, postNumbers);
  return (
    <aside className="col-span-1 space-y-6">
      <h2 className="text-3xl font-bold text-black">{title}</h2>
      <ul className="space-y-8">
        {showLinks &&
          [navigations[1]].map(({ slug, text }) => (
            <Link key={slug} href={slug} className="hover:text-red-900">
              <li>
                <p className="text-blackfont-semibold text-2xl  font-bold">
                  {text}
                </p>
              </li>
            </Link>
          ))}
        {latestPosts.length > 0 &&
          latestPosts.map(
            ({ title, date, id: slug, thumbnail, category, tags }) => (
              <FeaturedArticle
                category={category}
                title={title}
                date={date}
                imageUrl={thumbnail}
                href={`/news/${slug}`}
                tags={tags}
                key={slug}
              />
            ),
          )}
      </ul>
    </aside>
  );
}
