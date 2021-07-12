import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import Container from '@material-ui/core/Container';
import './landing.css'
import Projects from '../projects/Projects';
import ContactForm from '../contact/ContactForm';
import { useScroll } from '../../hooks/useScroll';

export default function LandingPage() {
  const {
    handlePortfolioScroll,
    handleAboutScroll,
    handleContactScroll,
    portfolioRef,
    aboutRef,
    contactRef
  } = useScroll();
 
  return (
    <Container>
      <Header 
        handlePortfolioScroll={handlePortfolioScroll}
        handleAboutScroll={handleAboutScroll}
        handleContactScroll={handleContactScroll}
      />
      <About ref={aboutRef}/>
      <Projects ref={portfolioRef}/>
      <ContactForm ref={contactRef}/>
    </Container>
  )
}

