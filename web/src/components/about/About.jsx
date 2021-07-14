import React, { forwardRef } from 'react';
import './about.css';
const About = forwardRef((props, ref) => {
    return (
      <section ref={ref} className='aboutContainer'>
        <h1 className='sectionHeader'>About</h1>
        <div className='topFlex'>
          <img src='../../myself.png' alt='Jake Thrasher' className='myselfImage'/>
          <div className='aboutText'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio commodi earum nisi quaerat ipsa animi accusamus perferendis quibusdam, aperiam eligendi asperiores porro saepe eum illum quasi, voluptate quis soluta voluptates.
            </p>
            <p>

            </p>
            <p>  
            I spent several years touring and recording as a professional bass player and I've found that my experience in music has really translated into the world of coding. Both music and coding allow you to create something out of nothing, and being able to build things that boost human potential is a driving force for me.
            </p>
          </div>
        </div>
      </section>
    )
})
export default About;
