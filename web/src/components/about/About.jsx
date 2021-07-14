import React, { forwardRef } from 'react';
import './about.css';
const About = forwardRef((props, ref) => {
    return (
      <section ref={ref} className='aboutContainer'>
        <h1 className='sectionHeader'>About</h1>
        <div className='innerContainer'>
          <img src='../../myself.png' alt='Jake Thrasher' className='myselfImage'/>
          <div className='aboutContent'>
            <p>Hi, I'm Jake Thrasher.</p>
            <p>
              I'm driven by curiosity and the constant desire to improve my abilities. I'm dedicated learning new tools and techniques to refine my craft and make me a better developer.
            </p>
            <p>  
              I spent several years touring and recording as a professional bass player and I've found that my experience in music has really translated into the world of coding. Both music and coding allow you to create something out of nothing, and being able to build things that boost human potential is a driving force for me.
            </p>
            <p>  
              Here are some of the tools and technologies I'm working with currently: 
            </p>
            <section className='technologies'>
              <span>
                <h5 className='techHeader'>Languages</h5>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>HTML</p>
                <p>CSS</p>
              </span>
              <span>
              <h5 className='techHeader'>Frameworks/Libraries</h5>
                <p>React</p>
                <p>Node.js</p>
                <p>Express</p>
                <p>Material-UI</p>
                <p>Socket.io</p>
              </span>
              <span>
              <h6 className='techHeader'>Dev Tools</h6>
                <p>GitHub</p>
                <p>Heroku</p>
                <p>Postman</p>
                <p>pgAdmin</p>
              </span>
              <span>
              <h5 className='techHeader'>Testing</h5>
                <p>Jest</p>
                <p>QUnit</p>
                <p>React Testing Library</p>
              </span>
              <span>
              <h5 className='techHeader'>Database</h5>
                <p>PostgreSQL</p>
                <p>MongoDB</p>
              </span>
            </section>
          </div>
        </div>
      </section>
    )
})
export default About;
