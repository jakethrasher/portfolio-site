import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import { GoMarkGithub } from 'react-icons/go';
import { FiExternalLink } from 'react-icons/fi'
import { makeStyles } from '@material-ui/core';
import './projects.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 30,
    backgroundColor:'light-grey',
    display:'inline-block',
    '& .MuiCardActions-root':{
      marginRight: '0.5em'
    }
  },
  media: {
    height: 220,
  },
  description:{
    color: '#555',
  },
  
});
const ProjectItem = ({project, index}) => {
  const classes = useStyles(); 
    return (
      <Grid 
        item 
        component={Card} 
        className={classes.root} 
        style={{padding:0}}
        elevation={0}
        >
        <CardMedia
          className={classes.media}
            component='img'
            alt='project'
            image={project.image}
            title='project'
        />
        <CardContent>
          <div className='nameAndLinks'>
            <Typography variant='h5'>
              {project.name}
            </Typography>
            <CardActions>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener"
              >
                <GoMarkGithub size='1.8em' color='#555'/>
              </Link>
              <Link
                href={project.site}
                target="_blank"
                rel="noopener"
              >
                <FiExternalLink size='1.8em' color='#555'/>
              </Link>
            </CardActions> 
          </div>
          <Typography variant='body2' className={classes.description}>
            {project.description}
          </Typography>
        </CardContent>
      </Grid>
    )
         
}
export default ProjectItem;
