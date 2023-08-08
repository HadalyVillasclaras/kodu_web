import { Section } from '../design-system/objects/Section'
import { Container } from '../design-system/objects/Container'
import { Hero, Destinations } from '../sections/home'
import { Marquee } from '../design-system/atoms/Marquee'
import { AboutUsSlider } from '../sections/home/AboutUsSlider'
import { Features } from '../sections/home/Features'
import { Divider } from '../design-system/atoms/Divider'
import { GsapTest } from './GsapTest'

export const HomePage = () => {
  return (
    <>
      <Section id='hero' size='full' customStyle={{ minHeight: "70vh" }}>
        <Hero />
      </Section>
      <Marquee text='Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays.&nbsp;'/>
      <Section>
        <Container bgImage='/src/assets/imgs/homes/dunlap/dunlap-2b.png'>
        </Container>
      </Section>
      <Section bgColor='green' size='small'>
        {/* <GsapTest/> */}
      </Section>
      <Section id='about-us' bgColor='brown' size='full'>
        <AboutUsSlider />
      </Section>
      <Section id='features' bgColor='brown' size='big'>
        <Features />
      </Section>
      {/* <Section bgColor='green' size='small' customStyle={{ justifyContent: "space-around" }}>
        <Gallery />
      </Section> */}
      <Section bgColor='green'>
        <Marquee color='brown' text='Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays.&nbsp;'/>
        <Container bgImage='/src/assets/imgs/homes/bloom/bloom-3.png'>
        </Container>
      </Section>
      <Section id='destinations' size='full'>
        <Destinations />
      </Section>
    </>
  )
}