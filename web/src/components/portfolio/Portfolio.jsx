import React, { forwardRef } from 'react';
import ProjectList from './ProjectList';

const Portfolio = forwardRef((props, ref) => (
  <div ref={ref} className='projectContainer'>
   <ProjectList/>
  </div>
));
  
export default Portfolio;
