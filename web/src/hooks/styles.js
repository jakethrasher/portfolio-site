import { makeStyles } from '@material-ui/core';

export const useHeaderStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,
    },
    bar:{
        justifyContent:'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
          },
        boxShadow: 'none',
        backgroundColor: '#e6e5dd',
        '& .MuiButton-root':{
          color:'#555',
          fontWeight:'500',
        }
    },
    paper:{
      borderRadius: 5,
      backgroundColor: '#e6e5dd',
    },
    contactLink:{
      color:'#555',
    },
  })); 

export const useProjectStyles = makeStyles(theme=>({
    root: {
      maxWidth: 500,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        margin:10,
      },
      margin: 30,
      backgroundColor:'light-grey',
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

  export const useContactStyles = makeStyles(theme=>({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
        [theme.breakpoints.down('xs')]: {
          width: '90vw',
        },
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(1),
        [theme.breakpoints.down(350)]: {
          marginTop: theme.spacing(0),
        },
      },
    },
  }));