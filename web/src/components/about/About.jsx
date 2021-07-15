import React, { forwardRef } from 'react';
import {Image, Transformation } from 'cloudinary-react';
import './about.css';

const About = forwardRef((props, ref) => {
    return (
      <section ref={ref} className='aboutContainer'>
        <h1 className='sectionHeader'>About</h1>
        <div className='innerContainer'>
          <div className='imageContainer'>
            <Image className='myselfImage' cloudName='dvo7m7dsq' secure='true' publicId="IMG_1872_aybgxr.png" >
              <Transformation width="350" crop="scale" />
            </Image>
          </div>
          <div className='aboutContent'>
            <p>
              I'm driven by curiosity and the constant desire to improve my abilities. I'm dedicated to learning new tools and techniques to refine my craft and make me a better developer.
            </p>
            <p>  
              I spent several years touring and recording as a professional bass player and I've found that my experience in music has really translated into the world of coding. Both music and coding allow you to create something out of nothing, and being able to build things that boost human potential is a driving force for me.
            </p>
            <p>  
              These are some of the tools and technologies that I'm currently working with: 
            </p>
            <section className='technologies'>
                <p>&#8227; React</p>
                <p>&#8227; TypeScript</p>
                <p>&#8227; Material-UI</p>
                <p>&#8227; Node.js</p>
                <p>&#8227; Express</p>
                <p>&#8227; PostgreSQL</p>
                <p>&#8227; Jest</p>
                <p>&#8227; React Testing Libray</p>
                <p>&#8227; Socket.io</p>
            </section>
          </div>
        </div>
      </section>
    )
})
export default About;
