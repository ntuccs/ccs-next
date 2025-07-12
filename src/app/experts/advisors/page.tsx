import { navigation } from '#/data/meta';
import Link from 'next/link';

const title = navigation.experts.title;

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
      <div className="mb-6">
        <h3>David Lee Ta-wei (Senior Advisors)</h3>
        <p>
          He is one of Taiwan's most distinguished diplomats and politicians. He
          served as the chairman of Taiwan's Straits Exchange Foundation (2020
          and 2023–2024), Secretary-General to the President of Taiwan
          (2020–2023), Secretary-General of the National Security Council of
          Taiwan (2018–2020), Minister of Foreign Affairs (2016–2018), and
          Taiwan's ambassador to Australia (2015–2016), Canada (2007–2012), the
          US (2004–2007), and the European Union (2001–2004). He is also the
          author of The Making of the Taiwan Relations Act: Twenty Years in
          Retrospect (Oxford University Press, 2000).
        </p>
      </div>
      <div className="mb-6">
        <h3>Jacques DeLisle (Senior Advisors)</h3>
        <p>
          He is the Stephen A. Cozen Professor of Law, Professor of Political
          Science, and Director of the Center for the Study of Contemporary
          China at the University of Pennsylvania, and Chair of the Asia Program
          at the Foreign Policy Research Institute. His writings on China’s
          engagement with the international order, Taiwan’s international status
          and cross-Strait relations, law and legal institutions and their
          relationship to politics and policy in the PRC, Hong Kong’s trajectory
          under Chinese rule, and US-China relations have appeared in Journal of
          Contemporary China, Asia Policy, China Review, Orbis, Administrative
          Law Review, and other academic and policy journals and edited volumes.
          He is the co-editor of, and contributor to, The Party Leads All: The
          Role of the Chinese Communist Party in China’s Politics, Governance,
          Society, Economy, and External Relations (2022), After Engagement:
          Dilemmas in U.S.-China Security Relations (2021), Taiwan in the Era of
          Tsai Ing-wen (2021), To Get Rich is Glorious: Challenges Facing
          China’s Economic Reform and Opening at Forty (2019), China’s Global
          Engagement: Cooperation, Competition, and Influence in the 21st
          Century (2017), The Internet, Social Media, and a Changing China
          (2016), Political Changes in Taiwan under Ma Ying-jeou (2014), and
          China’s Challenges (2014).
        </p>
      </div>
    </div>
  );
}
