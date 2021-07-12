import React, { forwardRef } from 'react';
import './about.css';
import Grid from '@material-ui/core/Grid';
import { 
  SiJavascript, 
  SiReact, 
  SiPostgresql, 
  SiHeroku, 
  SiPostman, 
  SiNetlify, 
  SiJest,
  SiGithub,
  SiCsswizardry 
} from 'react-icons/si';
import {TiHtml5} from 'react-icons/ti'
import { FaNode } from 'react-icons/fa'
const About = forwardRef((props, ref) => {
    return (
      <div 
        ref={ref} 
        className='aboutMeContainer' >
          <Grid container>
            <Grid item xs={12} sm={6} className='imageFlex'>
              <div className='background'>
                <img src='../../myself.png' className='meImage' alt='Jake Thrasher'/>
              </div>              
            </Grid>
            <Grid item xs={12} sm={6} className='aboutContent'>
              <h1 className='name'>
                JAKE<br></br>THRASHER
              </h1>
              <p className='blurb'>
              I'm a full-stack software engineer who strives to create apps that are modern and inspired. I'm all about solving complex problems and learning as much as possible along the way. I'm also passionate about self-expression, equality, and community. I spent several years touring and recording as a professional bass player and I've found that my experience in music has really translated into the world of coding. Both music and coding allow you to create something out of nothing, and being able to build things that boost human potential is a driving force for me.
              </p>
              <h4 className='techHeading'>Tech Stack and Tooling</h4>
              <section className='iconFlex'>
                <SiJavascript 
                  className='icon'
                />
                <SiReact 
                  className='icon'
                />
                <FaNode 
                  className='icon'
                />
                <SiJest
                className='icon'
                />
                <SiPostgresql 
                  className='icon'
                />
                <SiHeroku 
                  className='icon'
                />
                <SiGithub
                  className='icon'
                />
                <SiPostman 
                  className='icon'
                />
                <SiNetlify 
                  className='icon'
                />
                <TiHtml5
                  className='icon'
                />
                <SiCsswizardry
                  className='icon'
                />
              </section>
            </Grid>
          </Grid>
      </div>
    )
})

            
          
export default About;
