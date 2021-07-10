import React, { forwardRef } from 'react';
import './about.css';
import Grid from '@material-ui/core/Grid';

const About = forwardRef((props, ref) => {
  
    return (
      <div 
        ref={ref} 
        className='aboutMeContainer' >
          <Grid container>
            <Grid item xs={12} sm={6} className='imageFlex'>
              <div className='background'>
                <img src='../../myself.png' className='me' alt='me'/>
              </div>              
            </Grid>
            <Grid item xs={12} sm={6} >
            <div className='blurbContainer'>
            <h1 className='name'>JAKE<br></br>THRASHER</h1>
            <p className='blurb'>
              I'm a full-stack engineer who strives to create apps that are modern and inspired. 
            </p>
          </div>  
            </Grid>
          </Grid>
        
      </div>
    )
})
          
export default About;
