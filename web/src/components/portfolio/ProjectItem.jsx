import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const ProjectItem = ({project, index}) => {
  const classes = useStyles(); 

    return (
      <>
        <ListItem alignItems="flex-start">
            <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="project"
              height="200"
              image={project.image}
              title="Contemplative Reptile"
            />
          </Card>
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    )
}
export default ProjectItem;
