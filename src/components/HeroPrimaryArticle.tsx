import Image from 'next/image';
import Link from 'next/link';

interface FeaturedArticleProps {
  title: string;
  excerpt?: string;
  date: string;
  category?: string;
  imageUrl?: string;
  href: string;
  tags?: string[];
  isHero?: boolean;
}

export default function FeaturedArticle({
  title,
  excerpt = '',
  date,
  category = '',
  imageUrl = '',
  href,
  tags,
  isHero = false,
}: FeaturedArticleProps) {
  return (
    <article className="relative">
      <Link href={href}>
        <div className="relative mb-2 aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1
          className={`mb-2 hover:text-primary ${isHero ? 'text-4xl' : 'text-2xl'} font-bold leading-tight tracking-tight`}
        >
          {title}
        </h1>
        {/* <div>{category}</div> */}
        <div className="mb-2 flex items-center ">
          <div>
            {tags &&
              tags?.length > 0 &&
              tags?.map((t) => (
                <div
                  key={t}
                  className="mr-2 inline-block rounded bg-primary px-2 py-1 text-sm text-white last:mr-3"
                >
                  {t}
                </div>
              ))}
          </div>
          {date && <time className="block text-sm">{date}</time>}
        </div>
        {excerpt && <p className="text-md line-clamp-2">{excerpt}</p>}
      </Link>
    </article>
  );
}
