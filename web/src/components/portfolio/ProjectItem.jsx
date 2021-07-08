import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  description:{
    color:'#555',
    width: '80%',
  }
});
const ProjectItem = ({project, index}) => {
  const classes = useStyles(); 

    return (
      <>
        <ListItem>
          <Grid container alignItems='center'>
            <Grid item xs={12} sm={6}>
              <Card className={classes.root}>
                <CardMedia
                  component="img"
                  alt="project"
                  height="300"
                  image={project.image}
                  title="project"
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              
                <p className={classes.description}>{project.description}</p>  
             
            </Grid>
          </Grid>
            
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    )
}
export default ProjectItem;
