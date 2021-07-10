import React, { useRef, useEffect} from 'react';
import About from '../about/About';
import Header from '../header/Header';
import Container from '@material-ui/core/Container';
import './landing.css'
import Projects from '../projects/Projects';
import ContactForm from '../contact/ContactForm';

export default function LandingPage() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    aboutRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }, [])
  const handlePortfolioScroll = () =>{
   portfolioRef.current.scrollIntoView({
     behavior:'smooth',
   })  
  }
  const handleAboutScroll = () => {
    aboutRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }
  const handleContactScroll = () =>{
    contactRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }
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

