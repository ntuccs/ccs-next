import Link from 'next/link';
import { navigation } from '#/data/meta';
import { getPosts } from '#/lib/posts';
import PostCard from './HeroPrimaryArticle';

interface SideColumProps {
  title?: string;
  showLinks?: boolean;
  postNumbers?: number;
  excludeSlug?: string;
  // postData?: Post[];
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
    <aside>
      <h2 className="mb-6 text-3xl font-bold text-black">{title}</h2>
      <ul className="space-y-8">
        {showLinks && (
          <Link
            key={navigation.programs.slug}
            href={navigation.programs.slug}
            className="hover:text-red-900"
          >
            <li>
              <p className="text-blackfont-semibold text-2xl  font-bold">
                {navigation.programs.title}
              </p>
            </li>
          </Link>
        )}
        {latestPosts.length > 0 &&
          latestPosts.map(
            ({ title, date, id: slug, thumbnail, category, tags }) => (
              <PostCard
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
