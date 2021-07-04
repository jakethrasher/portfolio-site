import React, { useRef, useEffect} from 'react';
import About from '../about/About';
import Header from '../header/Header';
import Container from '@material-ui/core/Container';
import './landing.css'
import Portfolio from '../portfolio/Portfolio';

export default function LandingPage() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(() => {
    aboutRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }, [])
  const handleNavPortfolio = () =>{
   portfolioRef.current.scrollIntoView({
     behavior:'smooth',
   })  
  }
  const handleNavABout = () => {
    aboutRef.current.scrollIntoView({
      behavior:'smooth'
    })
  }
  return (
    <Container>
      <Header 
        handleNavPortfolio={handleNavPortfolio}
        handleNavABout={handleNavABout}/>
      <About ref={aboutRef}/>
      <Portfolio ref={portfolioRef}/>
    </Container>
  )
}

