import { Section } from './design-system/objects/Section'
import { Footer } from './sections/layout/Footer'
import { Header } from './sections/layout/Header';
import "./design-system/index.scss";
import "./App.css"
import { Container } from './design-system/objects/Container';
import { Hero } from './sections/home/Hero';
import { AboutUs } from './sections/home/AboutUs';

function App() {

  return (
    <>
      <Header />
      <main>
        <Section>
          <Container >
            <Hero/>
          </Container>
        </Section>
        <Section >
          <Container bgImage='/src/assets/imgs/homes/dunlap/dunlap1.png'>
          </Container>
        </Section>
        <Section bgColor='brown'>
          <Container >
            <AboutUs/>
          </Container>
        </Section>
        <Section bgColor='green'>
          <Container >
          </Container>
        </Section>
        <Section bgColor='green'  >
          <Container bgImage='/src/assets/imgs/homes/bloom/bloom3.png'>
          </Container>
        </Section>
        <Section >
          <Container >
          <p>hey</p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default App
