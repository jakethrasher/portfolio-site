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

const useStyles = makeStyles(theme=>({
  root: {
    maxWidth: 500,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin:10,
    },
    margin: 30,
    backgroundColor:'light-grey',
    transition:'0.2s linear',
    '&:hover':{
      transform:'scale(1.2)'
    }  
  },
  media: {
    height: 'auto',
  },
  description:{
    color: '#555',
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
      overflowY: 'scroll',
    },
  },
  
}));
const ProjectItem = ({project}) => {
  const classes = useStyles(); 
    return (
      <li className='listItem'>
        <Card 
          className={classes.root}
          elevation={0}  
        >
          <CardMedia
              className={classes.media}
              component='img'
              alt='project'
              image={project.image}
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
                    <GoMarkGithub 
                      size='1.8em' color='#555'/>
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
              {project.tech.map((el,i)=>(
                <Typography variant='caption' key={i} className='techList'>
                  {i === project.tech.length - 1 ? el : el + '| '}
                </Typography>
              ))}
              <Typography variant='body2' className={classes.description}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </li>
    )
         
}
export default ProjectItem;
