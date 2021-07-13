import React from 'react';
import projects from '../../data/projects';
import './projects.css'
import ProjectItem from './ProjectItem';

const ProjectList = () =>(
  <section className='projectList'>
       {projects.map((proj)=>
        <ProjectItem project={proj} key={proj.name}/>
      )}
  </section>
) 

export default ProjectList;
