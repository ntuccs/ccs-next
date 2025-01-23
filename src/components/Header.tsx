import Link from 'next/link';
import Logo from './Logo';
import { navigation } from '#/data/meta';

export default function Header() {
  return (
    <header className="border-b border-t-8 border-t-red-900">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <Logo />
        <nav className="space-x-6 text-lg font-medium text-gray-800">
          {Object.values(navigation).map(({ slug, title }) => (
            <Link key={slug} href={slug} className="hover:text-red-900">
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
