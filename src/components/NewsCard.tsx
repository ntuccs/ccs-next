import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  imageUrl?: string;
  imageAlt?: string;
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
}

export default function NewsCard({
  imageUrl = '',
  imageAlt = '',
  slug,
  title,
  description,
  date,
  tags,
}: NewsCardProps) {
  return (
    <Link href={slug} className="block">
      <article className="group flex flex-col gap-6 rounded-md bg-white px-6 py-4 shadow-lg md:flex-row">
        <div className="relative h-60 w-full flex-shrink-0 overflow-hidden rounded md:w-80">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="rounded object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-grow flex-col">
          <h2 className="mb-4 text-xl font-bold leading-tight text-gray-800 md:text-2xl">
            {title}
          </h2>
          <div className="mb-4 flex items-center ">
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
            {date && <time className="block text-sm">{date}</time>}
          </div>
          <p className="line-clamp-2 text-base text-gray-800">{description}</p>
        </div>
      </article>
    </Link>
  );
}
