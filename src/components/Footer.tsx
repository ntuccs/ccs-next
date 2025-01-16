import footer from '#/data/footer';

const { contactList, copyright } = footer;

export default function Footer() {
  return (
    <footer className="  border-t ">
      <div className="container mx-auto bg-white py-10 ">
        {/* <div className="container mx-auto grid grid-cols-2 gap-8 text-sm text-gray-700 md:grid-cols-4">
        <div>
          <h3 className="mb-4 font-bold">Topics</h3>
          <ul className="space-y-2">
            <li>Diplomacy</li>
            <li>Environment</li>
            <li>Politics</li>
            <li>Security</li>
            <li>Society</li>
            <li>Economics</li>
          </ul>
        </div>
      </div> */}

        {contactList.map(({ label, text }) => (
          <div key={text} className="my-2 flex text-sm md:w-1/3">
            <div className="md:w-1/6">{label}</div>
            <div className="text-gray-600">{text}</div>
          </div>
        ))}

        <div className="my-2  text-sm">
          {copyright.replace('{year}', `${new Date().getFullYear()}`)}
        </div>
      </div>
    </footer>
  );
}
