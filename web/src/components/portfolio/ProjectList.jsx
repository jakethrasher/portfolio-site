import React from 'react';
import projects from '../../data/projects';
import List from '@material-ui/core/List';
import './portfolio.css'
import ProjectItem from './ProjectItem';

const ProjectList = () =>(
  <List>
       {projects.map((proj, index)=>
        <ProjectItem project={proj} index={index} key={proj.name}/>
      )}
  </List>
) 

export default ProjectList;
