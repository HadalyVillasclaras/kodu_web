import { Section, BgImgContainer } from '../design-system/objects'
import { Hero, Destinations, AboutUs, AboutIntro } from '../sections/home'
import { Marquee } from '../design-system/atoms/Marquee'
import { Accordion, Fader } from '../design-system/molecules'
import { NavIconContext } from '../contexts/NavIconContext'
import { useContext, useEffect, useRef } from 'react'
import { useOnviewObserver } from '../hooks'
import { Colors } from '../design-system/types'

type SectionType = {
  ref: React.RefObject<HTMLElement>;
  iconColor: Colors;
  bgColor: Colors;
};

const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export const HomePage = () => {
  const { setHidden, setIconColor } = useContext(NavIconContext);
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
    { ref: refs.hero, iconColor: 'green', bgColor: 'cream' },
    { ref: refs.dunlap, iconColor: 'cream', bgColor: 'cream' },
    { ref: refs.aboutIntro, iconColor: 'cream', bgColor: 'green' },
    { ref: refs.aboutUs, iconColor: 'cream', bgColor: 'green' },
    { ref: refs.accordion, iconColor: 'green', bgColor: 'brown' },
    { ref: refs.bloom, iconColor: 'brown', bgColor: 'brown' },
    { ref: refs.destinations, iconColor: 'brown', bgColor: 'cream' },
  ];

  const inViewSectionId = useOnviewObserver(refs);

  function setIconColorOnSection() {
    const sectionInView = sections.find((section: SectionType) => section?.ref?.current?.id === inViewSectionId);
    if (sectionInView) {
      setIconColor(sectionInView.iconColor);
      setHidden(false)
    } else {
      setIconColor('green');
    }
  }

  useEffect(() => {
    setIconColorOnSection();
  }, [inViewSectionId]);

  return (
    <>
      <Fader />
      <Section id="hero" ref={refs.hero} size='full'>
        <Hero />
      </Section>
      <Marquee text='Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays.&nbsp;' />
      {/* <Section id="dunlap" ref={refs.dunlap}>
        <BgImgContainer bgImage={`${BASE_ASSETS}imgs/destinations/dunlap/dunlap-2b.png`}></BgImgContainer>
      </Section> */}
      <Section id="aboutIntro" ref={refs.aboutIntro} bgColor='green' size='small'>
        <AboutIntro />
      </Section>
      <Section id="aboutUs" ref={refs.aboutUs} bgColor='green' size='full'>
        <AboutUs />
      </Section>
      <Section id="accordion" ref={refs.accordion} bgColor='brown' size='big'>
        <Accordion />
      </Section>
      <Section id="bloom" ref={refs.bloom} bgColor='brown'>
        <BgImgContainer customStyle={{ backgroundColor: "brown" }} bgImage={`${BASE_ASSETS}imgs/destinations/bloom/bloom-3.png`}></BgImgContainer>
      </Section>
      <Section id="destinations" ref={refs.destinations} size='full'>
        <Destinations />
      </Section>
    </>
  );
}
