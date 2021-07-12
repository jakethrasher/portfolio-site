import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import { GoMarkGithub } from 'react-icons/go';
import { FiExternalLink } from 'react-icons/fi'
import { makeStyles } from '@material-ui/core';
import './projects.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 30,
    backgroundColor:'light-grey',
    display:'inline-block',
    '& .MuiCardActions-root':{
      marginRight: '0.5em'
    },
    transition:'0.2s linear',
    '&:hover, &:active':{
      transform:'scale(1.2)'
    }
  },
  media: {
    height: 'auto',
  },
  description:{
    color: '#555',
  },
  
});
const ProjectItem = ({project}) => {
  const classes = useStyles(); 
    return (
      <li>
        <Card 
          className={classes.root}
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
          </Card>
        </li>
    )
         
}
export default ProjectItem;
