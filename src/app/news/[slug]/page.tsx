// import { notFound } from 'next/navigation';
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
    <div className="post-prose">
      <h1 className=" text-2xl font-medium capitalize ">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml || '' }} />
    </div>
  );
}
