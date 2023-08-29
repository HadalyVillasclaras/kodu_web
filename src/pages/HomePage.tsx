import { Section } from '../design-system/objects/Section'
import { BgImgContainer } from '../design-system/objects/BgImgContainer'
import { Hero, Destinations, AboutUs } from '../sections/home'
import { Marquee } from '../design-system/atoms/Marquee'
import { AboutIntro } from '../sections/home/AboutIntro'
import { Accordion } from '../design-system/molecules/Accordion/Accordion'
import { NavIconContext  } from '../contexts/NavIconContext'
import { useContext, useEffect, useRef } from 'react'
import { useOnviewObserver } from '../hooks/useOnviewObserver'
import { Colors } from '../design-system/types'
import { Fader } from '../design-system/molecules/Fader';

type SectionType = {
  ref: React.RefObject<HTMLElement>;
  iconColor: Colors;
  bgColor: Colors;
};

export const HomePage = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
  const { setIconColor } =  useContext(NavIconContext);

  const refs = {
    hero: useRef(null),
    dunlap: useRef(null),
    aboutIntro: useRef(null),
    aboutUs: useRef(null),
    accordion: useRef(null),
    bloom: useRef(null),
    destinations: useRef(null),
  };

  const sections: SectionType[] = [
    { ref: refs.hero, iconColor: 'green' as Colors, bgColor: 'cream' as Colors },
    { ref: refs.dunlap, iconColor: 'cream' as Colors, bgColor: 'cream' as Colors },
    { ref: refs.aboutIntro, iconColor: 'cream' as Colors, bgColor: 'green' as Colors },
    { ref: refs.aboutUs, iconColor: 'cream' as Colors, bgColor: 'green' as Colors },
    { ref: refs.accordion, iconColor: 'green' as Colors, bgColor: 'brown' as Colors },
    { ref: refs.bloom, iconColor: 'brown' as Colors, bgColor: 'brown' as Colors },
    { ref: refs.destinations, iconColor: 'green' as Colors, bgColor: 'cream' as Colors },
  ];

  const inViewSectionId = useOnviewObserver(refs);
  
  useEffect(() => {
    const sectionInView = sections.find((section: SectionType) => section?.ref?.current?.id === inViewSectionId);
    if (sectionInView) {
      setIconColor(sectionInView.iconColor);
    } else {
      setIconColor('cream' as Colors);
    }
  }, [inViewSectionId]);

  return (
    <>
      <Fader />
      <Section id="hero" ref={refs.hero} size='full'>
        <Hero />
      </Section>
      <span style={{ width: "100%", margin: "5rem 0" }}>
        <Marquee text='Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays.&nbsp;' />
      </span>
      {/* <Section id="dunlap" ref={refs.dunlap}>
        <BgImgContainer bgImage={`${BASE_ASSETS}imgs/homes/dunlap/dunlap-2b.png`}></BgImgContainer>
      </Section> */}
      <Section id="aboutIntro" ref={refs.aboutIntro} bgColor='green' size='small'>
        <AboutIntro />
      </Section>
      <Section id="aboutUs" ref={refs.aboutUs} bgColor='green' size='big'>
        <AboutUs />
      </Section>
      <Section id="accordion" ref={refs.accordion} bgColor='brown' size='big'>
        <Accordion />
      </Section>
      <Section id="bloom" ref={refs.bloom} bgColor='brown'>
        <BgImgContainer customStyle={{ backgroundColor: "brown" }} bgImage={`${BASE_ASSETS}imgs/homes/bloom/bloom-3.png`}></BgImgContainer>
      </Section>
      <Section id="destinations" ref={refs.destinations} size='full'>
        <Destinations />
      </Section>
    </>
  );
}
