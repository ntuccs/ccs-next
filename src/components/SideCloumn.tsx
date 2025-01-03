import Link from 'next/link';
// import { notFound } from 'next/navigation';
import { getPosts } from '#/lib/posts';

export default function SideCloumn() {
  const news = getPosts().slice(0, 3);
  return (
    <aside className="space-y-6">
      <h2 className="text-3xl font-bold text-black">LATEST</h2>
      <ul className="space-y-4">
        {news.length > 0 &&
          news.map(({ title, date, id: slug }) => (
            <Link key={slug} href={`/news/${slug}`} className="block">
              <li>
                <p className="font-semibold">{title}</p>
                <span className="text-sm text-gray-500">{date}</span>
              </li>
            </Link>
          ))}
      </ul>
    </aside>
  );
}
