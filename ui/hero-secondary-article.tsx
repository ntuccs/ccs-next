import Image from 'next/image';
import Link from 'next/link';

interface RelatedArticleProps {
  title: string;
  excerpt?: string;
  date: string;
  category?: string;
  imageUrl?: string;
  href: string;
}

export function RelatedArticle({
  title,
  excerpt = '',
  date,
  category = '',
  imageUrl = '',
  href,
}: RelatedArticleProps) {
  return (
    <article className="group grid grid-cols-[2fr,3fr] gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <div>{category}</div>
        <Link href={href}>
          <h2 className="hover:text-primary line-clamp-2 text-xl font-semibold leading-tight">
            {title}
          </h2>
        </Link>
        <time className="text-muted-foreground block text-sm">{date}</time>
      </div>
    </article>
  );
}
