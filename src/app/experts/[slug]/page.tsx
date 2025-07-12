// import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPost } from '#/lib/posts';
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
    <section className="container mx-auto px-4 md:px-0">
      <div className="post-prose-sm md:post-prose">
        <h1 className="">{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml || '' }} />
      </div>
    </section>
  );
}
