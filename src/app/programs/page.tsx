/* eslint-disable react/no-unescaped-entities */
import { navigation } from '#/data/meta';

const title = navigation.programs.title;

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Page() {
  return (
    <div className="post-prose text-justify">
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <p>Latest update - (June 2025)</p>
      <div className="mb-6">
        <h2>Director</h2>
        <h3>S. Philip Hsu</h3>
      </div>
      <div className="mb-6">
        <h2>Deputy Director</h2>
        <div className="text-lg font-medium">George Yin</div>
      </div>
      <div className="mb-6">
        <p>
          Taiwan is at the forefront of US-China great power competition,
          offering an unparalleled vantage point to study the global
          implications of China's rise. To capitalize on Taiwan's unique
          position for "China watching," NTUCCS has integrated both existing and
          newly created research projects, with a strong emphasis on
          international partnerships, to form this new program.
        </p>
        <ul className="list-decimal pl-4">
          <li>
            The Digital Turn in Contemporary China Studies: Internal Governance
            and External Behaviors (Underconstruction…)
          </li>
          <li>Taiwan and the US-China Tech War (Underconstruction…)</li>
          <li>Managing China's Rise (Underconstruction…)</li>
          <li>
            Rule-Based International Order and Maritime Security
            (Underconstruction…)
          </li>
          <li>American Perspectives on China (Underconstruction…)</li>
        </ul>
      </div>
    </div>
  );
}
