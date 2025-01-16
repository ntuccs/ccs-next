import Image from 'next/image';

export default function About() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h3 className="mb-4 text-xl font-bold uppercase">ABOUT</h3>
        <h2 className="mb-6 text-3xl font-bold leading-snug">
          Center for Chian Studies, National Taiwan University
        </h2>
        <p className="mb-6 text-gray-600">
          The Center for China Studies (CCS), National Taiwan University was
          established in 2005. The Missions and Goals of the CCS are:
          Establishing Taiwan’s major research-oriented center, with
          far-reaching influence in Asia and around the globe, on contemporary
          China’s domestic and international affairs. Fostering academic
          research along various disciplines in social sciences on contemporary
          China. Providing policy-relevant perspectives for the ROC government
          or any other possible interested party. Promoting exchanges and
          cooperation with academic institutions in China, through mutual
          visits, workshops, conferences, joint programs, and joint publications
          published in both Taiwan and China. Pursuing internationalization of
          Taiwan’s China studies, through exchanges and cooperation with
          international academic institutions in Asia and the English-speaking
          world, via conferences, joint programs, and joint publications
          released in the English-speaking world. Playing a key role in
          affecting the intellectual agenda of the international academic
          community of China studies. Offering Taiwan’s understanding and
          interpretation of the rise of China for the rest of the world, and
          exercising Taiwan’s unique leverage in affecting institutional and
          ideational changes within China in the long run.
        </p>
        {/* <a
          href="#"
          className="flex items-center font-medium text-blue-600 hover:text-blue-800"
        >
          Read editor's pick
          <span className="ml-2">→</span>
        </a> */}
      </div>
      <div>
        <Image
          src="/about.jpg"
          width={400}
          height={300}
          alt="Sydney Harbor"
          className="h-auto w-full rounded-lg object-cover shadow"
        />
      </div>
    </section>
  );
}
