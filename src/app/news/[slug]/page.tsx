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
    <div className="">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className=" text-2xl font-medium capitalize text-gray-200">
          {data.title}
        </h1>
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2"></div>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml || '' }} />
    </div>
  );
}
