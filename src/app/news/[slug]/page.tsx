// import { notFound } from 'next/navigation';
import SideCloumn from '#/components/SideCloumn';
import { getAllPostSlugs, getPost } from '#/lib/posts';
import { navigation } from '#/data/meta';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;
  const data = await getPost(slug);
  const { title, thumbnail = '' } = data;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    openGraph: {
      title,
      images: [thumbnail, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const data = await getPost(slug);

  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-4 md:gap-12 md:px-0">
      <div className="order-last col-span-1 space-y-6 md:order-first">
        <SideCloumn
          title={navigation.news.title}
          postNumbers={3}
          excludeSlug={slug}
        />
      </div>
      <div className="order-first col-span-1 space-y-6 md:order-last md:col-span-3">
        <div className="post-prose-sm md:post-prose">
          <h1 className="">{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.contentHtml || '' }} />
        </div>
      </div>
    </section>
  );
}
