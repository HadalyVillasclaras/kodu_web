import { Section } from '../design-system/objects/Section'
import { Container } from '../design-system/objects/Container'
import { Hero, Destinations, AboutUs } from '../sections/home'
import { Marquee } from '../design-system/atoms/Marquee'
import { Fader } from '../sections/home/Fader'
import { AboutIntro } from '../sections/home/AboutIntro'
import { Accordion } from '../design-system/molecules/Accordion/Accordion'
import { useNavIconColor } from '../shared/context/NavIconColorContext'
import { useEffect, useRef } from 'react'
import { useOnviewObserver } from '../shared/hooks/useOnviewObserver'
import { Colors } from '../design-system/types'

type SectionType = {
  ref: React.RefObject<HTMLElement>;
  color: Colors;
};

export const HomePage = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
  const { setColor } = useNavIconColor();
  
  const refs = {
    hero: useRef(null),
    dunlap: useRef(null),
    aboutIntro: useRef(null),
    aboutUs: useRef(null),
    accordion: useRef(null),
    bloom: useRef(null),
    destinations: useRef(null),
  };

  const  sections: SectionType[] = [
    { ref: refs.hero, color: 'green' as Colors },
    { ref: refs.dunlap, color: 'cream' as Colors },
    { ref: refs.aboutIntro, color: 'cream' as Colors },
    { ref: refs.aboutUs, color: 'cream' as Colors },
    { ref: refs.accordion, color: 'green' as Colors },
    { ref: refs.bloom, color: 'brown' as Colors },
    { ref: refs.destinations, color: 'green' as Colors },
  ];

  const inViewSectionId = useOnviewObserver(refs); 

  
  useEffect(() => {
    //Check if current section is in view
    const sectionInView = sections.find((s:any) => s?.ref?.current?.id === inViewSectionId);
    if (sectionInView) {
      setColor(sectionInView.color);
    } else {
      setColor('green' as Colors);
    }
  }, [inViewSectionId]);

  return (
    <>
      {/* <Fader /> */}
      <Section id="sect-hero" ref={refs.hero} size='full'>
        <Hero />
      </Section>
      <span style={{ width: "100%", margin: "5rem 0" }}>
        <Marquee text='Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays.&nbsp;' />
      </span>
      <Section id="sect-dunlap"  ref={refs.dunlap}>
        <Container bgImage={`${BASE_ASSETS}imgs/homes/dunlap/dunlap-2b.png`}>
        </Container>
      </Section>
      <Section id="sect-aboutIntro" ref={refs.aboutIntro} bgColor='green' size='small'>
        <AboutIntro />
      </Section>
      <Section id="sect-aboutUs" ref={refs.aboutUs} bgColor='green' size='big'>
        <AboutUs />
      </Section>
      <Section id="sect-accordion" ref={refs.accordion} bgColor='brown' size='big'>
        <Accordion />
      </Section>
      <Section id="sect-bloom" ref={refs.bloom} bgColor='brown'>
        <Container customStyle={{ backgroundColor: "brown" }} bgImage={`${BASE_ASSETS}imgs/homes/bloom/bloom-3.png`}>
        </Container>
      </Section>
      <Section id="sect-destinations" ref={refs.destinations} size='full'>
        <Destinations />
      </Section>
    </>
  );
}
