import React, { forwardRef } from 'react';
import ProjectList from './ProjectList';

const Portfolio = forwardRef((props, ref) => (
  <section ref={ref} className='projectContainer'>
    <h1 className='sectionHeader'>Projects</h1>
   <ProjectList/>
  </section>
));
  
export default Portfolio;
