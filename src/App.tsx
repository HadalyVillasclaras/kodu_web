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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header/>
      <div style={{
            width: '100%',
            height: '100%',
        }}>
        <NavbarControl isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        {isOpen && <Navbar isOpen={isOpen}/>}
      </div>
      <main>
        <Section>
          <Container size='mid'>
            <Hero />
          </Container>
        </Section>
        <Section >
          <Container bgImage='/src/assets/imgs/homes/dunlap/dunlap1.png'>
          </Container>
        </Section>
        <Section bgColor='brown'>
          <Container size='mid'>
            <AboutUs />
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
          <Container size='mid'>
            <p>hey</p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default App
