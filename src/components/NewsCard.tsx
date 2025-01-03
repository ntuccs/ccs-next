import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  imageUrl?: string;
  imageAlt?: string;
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export default function NewsCard({
  imageUrl = '',
  imageAlt = '',
  slug,
  title,
  description,
  date,
}: NewsCardProps) {
  return (
    <Link href={slug} className="block">
      <article className="group flex gap-6 rounded bg-white p-6 shadow-lg">
        <div className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="rounded object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-grow flex-col">
          <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
            {title}
          </h2>
          <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
            <span>{date}</span>
          </div>
          <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
        </div>
      </article>
    </Link>
  );
}
