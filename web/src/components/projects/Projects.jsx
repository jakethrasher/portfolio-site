import React, { forwardRef } from 'react';
import ProjectList from './ProjectList';

const Portfolio = forwardRef((props, ref) => (
  <div ref={ref} className='projectContainer'>
    <h1 className='projectsTitle'>Projects</h1>
   <ProjectList/>
  </div>
));
  
export default Portfolio;
