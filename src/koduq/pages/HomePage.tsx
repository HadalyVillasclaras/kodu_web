import { Section, BgImgContainer } from '../../design-system/components/objects';
import { Destinations, AboutIntro } from '../sections/home';
import { Marquee } from '../../design-system/components/atoms';
import { Accordion, Fader } from '../../design-system/components/molecules';
import { NavIconContext } from '../context/NavIconContext';
import { useContext, useEffect, useRef } from 'react';
import { useOnviewObserver } from '../hooks';
import { type Colors } from '../../design-system/tokens';
import { HorizontalSection } from '../sections/home/horizontalSections/HorizontalSection';
import sectionImages from '../core/data/SectionImages.json';

interface SectionType {
  ref: React.RefObject<HTMLElement>
  iconColor: Colors
  bgColor: Colors
}

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
    destinations: useRef(null)
  };

  const sections: SectionType[] = [
    { ref: refs.hero, iconColor: 'brown', bgColor: 'cream' },
    { ref: refs.aboutIntro, iconColor: 'cream', bgColor: 'green' },
    { ref: refs.aboutUs, iconColor: 'cream', bgColor: 'green' },
    { ref: refs.accordion, iconColor: 'green', bgColor: 'brown' },
    { ref: refs.bloom, iconColor: 'brown', bgColor: 'brown' },
    { ref: refs.destinations, iconColor: 'brown', bgColor: 'cream' }
  ];

  const inViewSectionId = useOnviewObserver(refs);

  function setIconColorOnSection () {
    const sectionInView = sections.find((section: SectionType) => section?.ref?.current?.id === inViewSectionId);
    if (sectionInView) {
      setIconColor(sectionInView.iconColor);
      setHidden(false);
    } else {
      setIconColor('green');
    }
  }

  useEffect(() => {
    setIconColorOnSection();
  }, [inViewSectionId]);

  return (
    <>
      <Fader/>
      <Marquee text='Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays.&nbsp;' />
      <Section id="aboutIntro" ref={refs.aboutIntro} bgColor='green' size='small'>
        <AboutIntro />
      </Section>
      <div id="aboutUs" ref={refs.aboutUs}>
        <HorizontalSection/>
      </div>
      <Section id="accordion"  ref={refs.accordion} bgColor='brown' size='big'>
        <Accordion />
      </Section>
      <Section id="bloom" ref={refs.bloom} bgColor='brown'>
        <BgImgContainer customStyle={{ backgroundColor: 'brown' }} bgImage={BASE_ASSETS + sectionImages.zoom.src}></BgImgContainer>
      </Section>
      <Section id="destinations" customStyle={{ padding: '15vw 0' }} ref={refs.destinations} size='full'>
        <Destinations />
      </Section>
    </>
  );
};
