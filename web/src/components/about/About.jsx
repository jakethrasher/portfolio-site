import React, { forwardRef } from 'react';
import {Image, Transformation } from 'cloudinary-react';
import './about.css';

const About = forwardRef((props, ref) => {
    return (
      <section ref={ref} className='aboutContainer'>
        <h1 className='sectionHeader'>About</h1>
        <div className='innerContainer'>
          <div className='aboutContent'>
            <p>  
              I’m an engineer who’s stoked to wake up and code everyday. Learning new tools and techniques is a big driving force for me and I’m constantly trying to optimize my skills and further my understanding of web development.
            </p>
            <p>  
              I have a background in customer service which has strengthened my ability to build rapport with clients and I’m very at home in a team setting. I also spent several years touring and recording as a professional bassist and I’ve found that my experience in music has complimented my ability to collaborate and see projects through from start to finish. 
            </p>
            <p>  
              These are some of the tools and technologies that I'm currently working with: 
            </p>
            <section className='technologies'>
                <p>&#8227; React</p>
                <p>&#8227; TypeScript</p>
                <p>&#8227; Node.js</p>
                <p>&#8227; Express</p>
                <p>&#8227; PostgreSQL</p>
                <p>&#8227; Jest</p>
                <p>&#8227; React Testing Libray</p>
                <p>&#8227; AWS S3/SES</p>
                <p>&#8227; Socket.io</p>
            </section>
          </div>
          <div className='imageContainer'>
            <Image 
              className='myselfImage' cloudName='dvo7m7dsq' 
              secure='true' 
              publicId="IMG_1872_aybgxr.png" >
              <Transformation width='700' quality='90' crop="scale"/>
            </Image>
          </div>
        </div>
      </section>
    )
})
export default About;
