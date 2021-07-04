import React, {useState, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,
    },
    bar:{
        justifyContent:'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
          },
        boxShadow: 'none',
        backgroundColor: 'white',
    },
    paper:{
      borderRadius: 5,
      backgroundColor: 'lightgrey'
    },
    contactLink:{
      color:'white',
    }
})); 
const Header = ({handleNavPortfolio, handleNavABout}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleClose = (e) => {
      if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
      }
      setOpen(prev=>!prev)
    }
   
    return(
        <AppBar className={classes.bar} position='fixed'>
          <Toolbar className={classes.bar}>
            <Button onClick={()=>handleNavPortfolio()}>Portfolio</Button>
            <Button onClick={()=>handleNavABout()}>About</Button>
            <Button
              ref={anchorRef}
              onMouseEnter={()=>setOpen(prev=>!prev)}
              onMouseLeave={()=>setOpen(prev=>!prev)}
              >
              Contact
            </Button>

            <Popper 
              onMouseEnter={()=>setOpen(prev=>!prev)}
              onMouseLeave={()=>setOpen(prev=>!prev)}
              open={open} 
              anchorEl={anchorRef.current} 
              role={undefined} 
              transition 
              disablePortal>
              {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper 
                  elevation={0}
                  className={classes.paper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList  id="menu-list-grow">
                      <MenuItem>
                        <Link
                          className={classes.contactLink}
                          href='https://github.com/jakethrasher' 
                          target="_blank"
                          rel="noopener"
                        >
                          Github
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link 
                          className={classes.contactLink}
                          href='https://www.linkedin.com/in/m-jake-thrasher/' 
                          target="_blank"
                          rel="noopener"
                        >
                          LinkedIn
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          className={classes.contactLink} 
                          href='https://drive.google.com/file/d/1LPSoKr3mijhAsUBwQwNa7x-MP3r4a7Hy/view' 
                          target="_blank"
                          rel="noopener"
                        >
                          Resume
                        </Link>
                      </MenuItem>
                      <MenuItem>
                      <a 
                        className={classes.contactLink} 
                        href="mailto:mjakethrasher@gmail.com?subject=Hi Jake!">Email Me!</a>
                      </MenuItem>
                      
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
              )}
            </Popper>
          </Toolbar>
        </AppBar>
    )
};
export default Header;