import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 30,
    backgroundColor:'light-grey'
  },
  media: {
    height: 220,
  },
  description:{
    color: '#555',
  }
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
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5'>
            {project.name}
          </Typography>
          <Typography variant='body2' className={classes.description}>
            {project.description}
          </Typography>
        </CardContent>       
      </Grid>
    )
}
export default ProjectItem;
