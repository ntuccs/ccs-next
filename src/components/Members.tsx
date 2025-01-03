import Image from 'next/image';

export default function Members() {
  const contributors = [
    {
      name: 'Ben Sando',
      institute: 'Global Taiwan Institute',
      image: '/about.jpg',
    },
    {
      name: 'Tsaiying Lu',
      institute:
        'Research Institute for Democracy, Society and Emerging Technology',
      image: '/about.jpg',
    },
    {
      name: 'Sonia Su',
      institute:
        'Research Institute for Democracy, Society and Emerging Technology',
      image: '/about.jpg',
    },
    {
      name: 'Alex Liu',
      institute:
        'Research Institute for Democracy, Society and Emerging Technology',
      image: '/about.jpg',
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">MEMBERS</h2>
        {/* <a
          href="#"
          className="flex items-center font-medium text-black hover:text-gray-700"
        >
          See all <span className="ml-2">→</span>
        </a> */}
      </div>
      <div className="relative mt-8">
        {/* Carousel controls */}
        {/* <button className="absolute left-0 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-black text-white">
          ←
        </button> */}
        <div className="flex justify-evenly space-x-6 overflow-x-auto">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              className="flex w-48 flex-shrink-0 flex-col items-center space-y-4 text-center"
            >
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                {contributor.image ? (
                  <Image
                    src={contributor.image}
                    width={400}
                    height={300}
                    alt={contributor.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold">
                    {contributor.name[0]}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{contributor.name}</h3>
                <p className="text-sm text-gray-600">{contributor.institute}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <button className="absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-black text-white">
          →
        </button> */}
      </div>
    </section>
  );
}
