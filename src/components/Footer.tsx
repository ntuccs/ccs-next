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
    <footer className="border-t bg-primary px-4 text-white md:px-0 ">
      <div className="container mx-auto py-6">
        {contactList.map(({ label, text }) => (
          <div
            key={text}
            className="mb-4 flex flex-col text-sm md:my-2 md:w-1/2  md:flex-row"
          >
            <div className="mb-1 font-semibold md:mb-0 md:w-1/6">{label}</div>
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
