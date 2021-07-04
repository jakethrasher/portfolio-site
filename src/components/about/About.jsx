import React, { forwardRef } from 'react';
import './about.css';

const About = forwardRef((props, ref) => {
    return (
      <section ref={ref} className='aboutMeContainer' id='about'>
        <div className='circle'>
        </div>
        <div className='blurb'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia provident vitae, unde possimus consequatur reprehenderit necessitatibus dicta in nesciunt consectetur beatae soluta, odit, minima ullam debitis officiis. Esse, ea?
          </p>
        </div>  
      </section>
    )
})
          
export default About;
