import Link from 'next/link';
import Logo from './Logo';
import navigations from '#/data/navigations';

export default function Header() {
  return (
    <header className="border-b border-t-8 border-t-red-900">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <Logo />
        <nav className="space-x-6 text-lg font-medium text-gray-800">
          {navigations.map(({ slug, text }) => (
            <Link key={slug} href={slug} className="hover:text-red-900">
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
