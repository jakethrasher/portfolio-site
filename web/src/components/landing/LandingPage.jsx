import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import './landing.css'
import Projects from '../projects/Projects';
import ContactForm from '../contact/ContactForm';
import { useScroll } from '../../hooks/useScroll';
import { BsArrowDownShort } from 'react-icons/bs'

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
    <main>
      <Header 
        handlePortfolioScroll={handlePortfolioScroll}
        handleAboutScroll={handleAboutScroll}
        handleContactScroll={handleContactScroll}
      />
       <section
        className='landingContainer' >
        <div className='centerContent'>
          <h3 className='greeting'>Hello! I'm</h3>
          <h1 className='name'>Jake<br></br>Thrasher.</h1>
          <h2 className='statement'>
            I'm a full-stack software engineer in Portland, Oregon. I like to build apps that are modern and inspired. I'm all about tackling complex problems and learning as much as I can along the way.
          </h2>
        </div>
        <div className='chevronDiv'>
          <BsArrowDownShort
            onClick={handleAboutScroll}
            size='4rem' 
            style={{color:'rgba(85, 85, 85, 0.646)'}}/>
        </div>
      </section>
      <About handlePortfolioScroll={handlePortfolioScroll} ref={aboutRef}/>
      <Projects ref={portfolioRef}/>
      <ContactForm ref={contactRef}/>
    </main>
  )
}

