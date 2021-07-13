import {useRef} from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export const useScroll=()=>{
  smoothscroll.polyfill();
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

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

  return {
    handlePortfolioScroll,
    handleAboutScroll,
    handleContactScroll,
    portfolioRef,
    aboutRef,
    contactRef
  }
};