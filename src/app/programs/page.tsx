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
      <p>Latest update - September 2024</p>
      <p>
        Taiwan is at the forefront of US-China great power competition, offering
        an unparalleled vantage point to study the global implications of
        China's rise. To capitalize on Taiwan's unique position for "China
        watching," NTUCCS has integrated both existing and newly created
        research projects, with a strong emphasis on international partnerships,
        to form this new program.
      </p>
      <ol>
        <li>
          The Digital Turn in Contemporary China Studies: Internal Governance
          and Behaviors
        </li>
        <li>Taiwan and the US-China Tech War</li>
        <li>Managing China's Rise</li>
        <li>Rule-Based International Order and Maritime Security</li>
        <li>American Perspectives on China</li>
      </ol>
      <h2>Director</h2>
      <h3>S. Philip Hsu</h3>
      <p></p>

      <h2>Deputy Director</h2>
      <h3>George Yin</h3>
      <p></p>

      <h2>Senior Advisors</h2>
      <h3>David Lee Ta-wei</h3>
      <p>
        He is one of Taiwan's most distinguished diplomats and politicians. He
        served as the chairman of Taiwan's Straits Exchange Foundation (2020 and
        2023–2024), Secretary-General to the President of Taiwan (2020–2023),
        Secretary-General of the National Security Council of Taiwan
        (2018–2020), Minister of Foreign Affairs (2016–2018), and Taiwan's
        ambassador to Australia (2015–2016), Canada (2007–2012), the US
        (2004–2007), and the European Union (2001–2004). He is also the author
        of{' '}
        <em>
          The Making of the Taiwan Relations Act: Twenty Years in Retrospect
        </em>{' '}
        (Oxford University Press, 2000).
      </p>

      <h3>Jacques DeLisle</h3>
      <p>
        He is the Stephen A. Cozen Professor of Law, Professor of Political
        Science, and Director of the Center for the Study of Contemporary China
        at the University of Pennsylvania, and Chair of the Asia Program at the
        Foreign Policy Research Institute. His writings on China’s engagement
        with the international order, Taiwan’s international status and
        cross-Strait relations, law and legal institutions and their
        relationship to politics and policy in the PRC, Hong Kong’s trajectory
        under Chinese rule, and US-China relations have appeared in{' '}
        <em>Journal of Contemporary China</em>, <em>Asia Policy</em>,{' '}
        <em>China Review</em>, <em>Orbis</em>,{' '}
        <em>Administrative Law Review</em>, and other academic and policy
        journals and edited volumes. He is the co-editor of, and contributor to,{' '}
        <em>
          The Party Leads All: The Role of the Chinese Communist Party in
          China’s Politics, Governance, Society, Economy, and External Relations
        </em>{' '}
        (2022),{' '}
        <em>After Engagement: Dilemmas in U.S.-China Security Relations</em>{' '}
        (2021), <em>Taiwan in the Era of Tsai Ing-wen</em> (2021),{' '}
        <em>
          To Get Rich is Glorious: Challenges Facing China’s Economic Reform and
          Opening at Forty
        </em>{' '}
        (2019),{' '}
        <em>
          China’s Global Engagement: Cooperation, Competition, and Influence in
          the 21st Century
        </em>{' '}
        (2017), <em>The Internet, Social Media, and a Changing China</em>{' '}
        (2016), <em>Political Changes in Taiwan under Ma Ying-jeou</em> (2014),
        and <em>China’s Challenges</em> (2014).
      </p>
    </div>
  );
}
