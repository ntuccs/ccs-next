import { navigation } from '#/data/meta';
import Link from 'next/link';

const title = navigation.experts.title;

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Page() {
  return (
    <div className="post-prose text-justify">
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <div className="space-y-4">
        <ul className="list-decimal pl-4">
          <li>In-house Experts (Underconstruction…)</li>
          {/* <li><Link href="/experts/in-house-experts">In-house Experts</Link></li> */}
          <li>Adjunct Research Fellows (Underconstruction…)</li>
          {/* <li><Link href="/experts/adjunct-research-fellows">Adjunct Research Fellows</Link></li> */}
          <li>
            <Link href="/experts/advisors">Advisors</Link>
          </li>
          <li>Administrative Staffs (Underconstruction…)</li>
          {/* <li><Link href="/experts/administrative-staffs">Administrative Staffs</Link></li> */}
        </ul>
      </div>
    </div>
  );
}
