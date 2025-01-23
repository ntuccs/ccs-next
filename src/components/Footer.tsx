const contactList = [
  {
    label: 'Address',
    text: 'No. 1, Sec. 4, Roosevelt Road, Taipei, 10617 Taiwan, R.O.C',
  },
  {
    label: 'TEL',
    text: '+886-2-3366-3366 Ext. 55693 or 55695',
  },
  {
    label: 'E-mail',
    text: 'ntuccs@ntu.edu.tw',
  },
];

const copyright =
  'Copyright ©{year} Center for China Studies, National Taiwan University All Rights Reserved.';

export default function Footer() {
  return (
    <footer className="border-t bg-primary text-white ">
      <div className="container mx-auto py-6">
        {/* <div className="container mx-auto grid grid-cols-2 gap-8 text-sm text-gray-800 md:grid-cols-4">
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
          <div key={text} className="my-2 flex text-sm md:w-1/2">
            <div className="font-semibold md:w-1/6">{label}</div>
            <div className="tracking-wide text-white">{text}</div>
          </div>
        ))}

        <div className="mt-8 text-sm font-semibold tracking-wide">
          {copyright.replace('{year}', `${new Date().getFullYear()}`)}
        </div>
      </div>
    </footer>
  );
}
