import React from 'react';
import projects from '../../data/projects';
import './projects.css'
import ProjectItem from './ProjectItem';
import Grid from '@material-ui/core/Grid';

const ProjectList = () =>(
  <Grid container justify='center'>
       {projects.map((proj, index)=>
        <ProjectItem project={proj} index={index} key={proj.name}/>
      )}
  </Grid>
) 

export default ProjectList;
