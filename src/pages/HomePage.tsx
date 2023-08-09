import { Section } from '../design-system/objects/Section'
import { Container } from '../design-system/objects/Container'
import { Hero, Destinations, AboutUs } from '../sections/home'
import { Marquee } from '../design-system/atoms/Marquee'
import { Features } from '../sections/home/Features'
import { Fader } from '../sections/home/Fader'
import { AboutIntro } from '../sections/home/AboutIntro'

export const HomePage = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
  return (
    <>
      <Fader />
      <Section size='full'>
        <Hero />
        <span style={{ width: "100%", margin: "5rem 0" }}>
          <Marquee text='Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays.&nbsp;' />
        </span>
      </Section>
      <Section>
        <Container bgImage={`${BASE_ASSETS}imgs/homes/dunlap/dunlap-2b.png`}>
        </Container>
      </Section>
      <Section bgColor='green' size='small'>
        <AboutIntro/>
      </Section>
      <Section bgColor='green' size='big'>
        {/* <AboutUsSlider /> */}
        <AboutUs/>
      </Section>
      <Section bgColor='brown' size='big'>
        <Features />
      </Section>
      {/* <Section bgColor='green' size='small' customStyle={{ justifyContent: "space-around" }}>
        <Gallery />
      </Section> */}
      <Section bgColor='green'>
        <Marquee color='brown' text='Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays.&nbsp;' />
        <Container bgImage={`${BASE_ASSETS}imgs/homes/bloom/bloom-3.png`}>
        </Container>
      </Section>
      <Section size='full'>
        <Destinations />
      </Section>
    </>
  )
}
