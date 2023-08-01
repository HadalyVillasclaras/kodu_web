import { Section } from '../design-system/objects/Section'
import { Container } from '../design-system/objects/Container'
import { Hero, AboutUs, Gallery, Destinations } from '../sections/home/index'

export const HomePage = () => {
  return (
    <>
      <Section size='big'>
        <Hero />
      </Section>
      <Section>
        <Container bgImage='/src/assets/imgs/homes/dunlap/dunlap-2b.png'>
        </Container>
      </Section>
      <Section bgColor='brown' size='big'>
        <AboutUs />
      </Section>
      <Section bgColor='green' size='small' customStyle={{ justifyContent: "space-around" }}>
        <Gallery />
      </Section>
      <Section bgColor='green'>
        <Container bgImage='/src/assets/imgs/homes/bloom/bloom-3.png'>
        </Container>
      </Section>
      <Section size='small'>
        <Destinations />
      </Section>
    </>
  )
}
