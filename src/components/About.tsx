import Image from 'next/image';
import { website, about } from '#/data/meta';

const { title, intro } = about;

export default function About() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-12 py-12 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 text-3xl font-bold text-black">{title}</h2>
        <h3 className="mb-2 text-2xl font-bold leading-snug text-black">
          {website.title}
        </h3>
        <p className="mb-2 text-justify text-gray-800">{intro.leading}</p>
        <ul>
          {intro.missions.map((m) => (
            <li key={m} className="my-2 text-justify text-gray-800">
              {m}
            </li>
          ))}
          <li></li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full">
          <Image
            src="/about.jpg"
            width={400}
            height={300}
            alt="NTUCSS"
            className="h-auto w-full rounded-lg object-cover shadow"
          />
        </div>
      </div>
    </section>
  );
}
