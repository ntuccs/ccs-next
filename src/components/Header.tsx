import Link from 'next/link';
import Logo from './Logo';
import { navigation } from '#/data/meta';
import { Fragment } from 'react';

export default function Header() {
  return (
    <Fragment>
      <header className="border-t-8 border-t-red-900 md:border-b">
        <div className="container mx-auto flex items-center justify-between border-b px-4 md:border-b-0 ">
          <Logo />
          <nav className="hidden space-x-6 text-lg font-medium text-gray-800 md:block">
            {Object.values(navigation).map(({ slug, title }) => (
              <Link key={slug} href={slug} className="hover:text-red-900">
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <nav className="container sticky top-0 z-10 mx-auto flex  items-center space-x-6 bg-red-900 px-4 py-2 text-lg font-medium text-gray-100 md:hidden">
        {Object.values(navigation).map(({ slug, title }) => (
          <Link key={slug} href={slug} className="active:text-gray-300">
            {title}
          </Link>
        ))}
      </nav>
    </Fragment>
  );
}
