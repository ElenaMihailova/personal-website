import './home-page.scss';

import { data } from '@/data/data';
import { MAIN_CONTENT_ID } from '@/data/section-id';
import About from '@/sections/about';
import Contacts from '@/sections/contacts';
import Experience from '@/sections/experience';
import Hero from '@/sections/hero';
import Skills from '@/sections/skills';
import Work from '@/sections/work';

function HomePage() {
  return (
    <main className="home-page" id={MAIN_CONTENT_ID} tabIndex={-1}>
      <Hero hero={data.hero} resume={data.resume} />
      <Work work={data.work} />
      <Experience experience={data.experience} />
      <Skills skills={data.skills} />
      <About about={data.about} />
      <Contacts contacts={data.contacts} resume={data.resume} socials={data.socials} />
    </main>
  );
}

export default HomePage;
