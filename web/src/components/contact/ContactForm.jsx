import React, {useState, forwardRef} from 'react';
import './contact.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/'
import { sendContact } from '../../services/sendContact';

const useStyles = makeStyles(theme=>({
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

const ContactForm = forwardRef((props,ref) => {
  
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit= async(e) =>{
    e.preventDefault();
    await sendContact(email, subject, message);
    setEmail('');
    setSubject('');
    setMessage('');
  }

    return(
      <div className='contactContainer' ref={ref}>
        <h1 className='sectionHeader'>Contact</h1>
        <div className='formContainer'>
        <p className='reachOutText'>Please feel free to reach out!</p>
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
            rows={8}
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
      </div>
    )
});

export default ContactForm;
