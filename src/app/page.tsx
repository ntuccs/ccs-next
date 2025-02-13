import Hero from '#/components/Hero';
import About from '#/components/About';
import Members from '#/components/Members';

export default function Page() {
  return (
    <main className="px-4 md:px-0">
      <Hero />
      <About />
      <Members />
    </main>
  );
}
