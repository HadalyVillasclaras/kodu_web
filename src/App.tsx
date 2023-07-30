import { Section } from './design-system/objects/Section'
import { Footer } from './sections/layout/Footer'
import { Header } from './sections/layout/Header';
import "./design-system/index.scss";
import "./App.css"
import { Container } from './design-system/objects/Container';
import { Hero } from './sections/home/Hero';
import { AboutUs } from './sections/home/AboutUs';
import { Navbar } from './sections/layout/Navbar';
import { useState } from 'react';
import { NavbarControl } from './sections/layout/NavbarControl';
import { Destinations } from './sections/home/Destinations';
import { Input } from './design-system/atoms/Input';
import { Heading } from './design-system/atoms/Heading';
import { DestinationCard } from './design-system/molecules/DestinationCard';
import { ArrowsNav } from './design-system/molecules/ArrowsNav';
import { Carousel } from './design-system/molecules/Carousel';
import { Gallery } from './sections/home/Gallery';
import { Credits } from './design-system/molecules/Credits';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <div style={{
        width: '100%',
        height: '100%',
      }}>
        <NavbarControl isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {isOpen && <Navbar isOpen={isOpen} />}
      </div>
      <main>
        <Section size='big'>
          <Hero/>
        </Section>
        <Section>
          <Container bgImage='/src/assets/imgs/homes/dunlap/dunlap1.png'>
          </Container>
        </Section>
        <Section bgColor='brown' size='big'>
          <AboutUs />
        </Section>
        <Section bgColor='green' size='small' customStyle={{justifyContent:"space-around"}}>
          <Gallery/>
        </Section>
        <Section bgColor='green'>
          <Container bgImage='/src/assets/imgs/homes/bloom/bloom3.png'>
          </Container>
        </Section>
        <Section size='small'>
          <Destinations />
        </Section>
      </main>
      <Footer />
      <Credits/>
    </>
  )
}

export default App
