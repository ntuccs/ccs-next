import memberData from '#/data/about';
import Image from 'next/image';

export default function About() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-12 py-12 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 text-3xl font-bold uppercase text-black">About</h2>
        <h3 className="mb-6 text-2xl font-bold leading-snug text-black">
          Center for Chian Studies, National Taiwan University
        </h3>
        <p className="my-2 text-gray-600">
          The Center for China Studies (CCS), National Taiwan University was
          established in 2005. The Missions and Goals of the CCS are:
        </p>
        <ul>
          {memberData.missions.map((m) => (
            <li key={m} className="my-2 text-justify text-gray-600">
              {m}
            </li>
          ))}
          <li></li>
        </ul>

        <p></p>
        {/* <a
          href="#"
          className="flex items-center font-medium text-blue-600 hover:text-blue-800"
        >
          Read editor's pick
          <span className="ml-2">→</span>
        </a> */}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full">
          <Image
            src="/about.jpg"
            width={400}
            height={300}
            alt="Sydney Harbor"
            className="h-auto w-full rounded-lg object-cover shadow"
          />
        </div>
      </div>
    </section>
  );
}
