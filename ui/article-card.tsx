// import { Card, CardContent } from '#/ui/card';
// import { Badge } from '#/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  href: string;
}

export function ArticleCard({
  category,
  title,
  excerpt,
  date,
  imageUrl,
  href,
}: ArticleCardProps) {
  return (
    <div className="overflow-hidden border-0 bg-transparent">
      <Link href={href}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <div className="bg-primary/90 absolute left-4 top-4">{category}</div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground mb-2 line-clamp-2 text-sm">
            {excerpt}
          </p>
          <time className="text-muted-foreground text-xs">{date}</time>
        </div>
      </Link>
    </div>
  );
}
