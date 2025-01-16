import Image from 'next/image';
import members from '#/data/members';

export default function Members() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">MEMBERS</h2>
      </div>
      <div className="relative mt-8">
        <div className="flex justify-evenly space-x-6 overflow-x-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex w-48 flex-shrink-0 flex-col items-center space-y-4 text-center"
            >
              <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                {member.image ? (
                  <Image
                    src={member.image}
                    width={400}
                    height={300}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold">{member.name[0]}</span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
