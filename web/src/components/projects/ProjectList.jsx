import React from 'react';
import projects from '../../data/projects';
import './projects.css'
import ProjectItem from './ProjectItem';

const ProjectList = () =>(
  <ul className='ul'>
       {projects.map((proj, index)=>
        <ProjectItem project={proj} key={proj.name}/>
      )}
  </ul>
) 

export default ProjectList;
