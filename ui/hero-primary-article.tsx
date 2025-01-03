import Image from 'next/image';
import Link from 'next/link';

interface FeaturedArticleProps {
  title: string;
  excerpt?: string;
  date: string;
  category?: string;
  imageUrl?: string;
  href: string;
}

export function FeaturedArticle({
  title,
  excerpt = '',
  date,
  category = '',
  imageUrl = '',
  href,
}: FeaturedArticleProps) {
  return (
    <article className="relative">
      <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* <div>{category}</div> */}
      <Link href={href}>
        <h1 className="hover:text-primary mt-4 text-2xl font-bold leading-tight tracking-tight">
          {title}
        </h1>
      </Link>
      <p className="text-muted-foreground text-md mt-4 line-clamp-2">
        {excerpt}
      </p>
      <time className="text-muted-foreground mt-4 block text-sm">{date}</time>
    </article>
  );
}
