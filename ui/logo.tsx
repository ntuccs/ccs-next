import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="md:w-1/2">
      <Link href="/">
        <Image
          src="/logo.jpg"
          alt="網站 Logo"
          width={721}
          height={110}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
