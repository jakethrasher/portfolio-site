import React, {useState} from 'react';
import './form.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/'

const useStyles = makeStyles(theme=>({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit= (e) =>{
    e.preventDefault();
    console.log(email, subject, message)
  }

    return(
      <div className='contactContainer'>
        <form 
          onSubmit={handleSubmit}
          className={classes.root}
          >
          <TextField
            margin='normal'
            label='Email'
            variant='outlined'
            onChange={({target})=>setEmail(target.value)}
            value={email}  
            />
          <TextField
            label='subject'
            variant='outlined'
            onChange={({target})=>setSubject(target.value)}
            value={subject}
            />
          <TextField 
            multiline
            rows='10'
            label='message'
            variant='outlined'
            onChange={({target})=>setMessage(target.value)}
            value={message}
            />
          <Button
            type='submit'
            variant='outlined'
            >
            Submit
          </Button>
        </form>
      </div>
    )
};

export default ContactForm;
