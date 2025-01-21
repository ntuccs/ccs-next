// import { notFound } from 'next/navigation';
import SideCloumn from '#/components/SideCloumn';
import { getAllPostSlugs, getPost } from '#/lib/posts';

export async function generateStaticParams() {
  const allPostsData = getAllPostSlugs();
  return allPostsData;
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const data = await getPost(params.slug);

  return (
    <section className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-4">
      <SideCloumn
        title="Nesw & Events"
        postNumbers={3}
        excludeSlug={params.slug}
      />
      <div className="col-span-1 space-y-6 md:col-span-3">
        <div className="w-full">
          <div className="post-prose">
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.contentHtml || '' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
