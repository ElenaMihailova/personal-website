import './home-page.scss';

import { data } from '@/data/data';
import About from '@/sections/about/about';
import Contacts from '@/sections/contacts';
import Experience from '@/sections/experience';
import Hero from '@/sections/hero/hero';
import Skills from '@/sections/skills';

function HomePage() {
  return (
    <main className="home-page">
      <Hero hero={data.hero} />
      <About about={data.about} />
      <Experience experience={data.experience} />
      <Skills skills={data.skills} />
      <Contacts contacts={data.contacts} socials={data.socials} />
    </main>
  );
}

export default HomePage;
