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
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

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
      backgroundColor: '#e6e5dd',
      '& .MuiButton-root':{
        color:'rgba(85, 85, 85, 0.536)',
        fontWeight:'600',
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

const Header = ({handlePortfolioScroll, handleAboutScroll, handleContactScroll}) => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
    return;
    }
    setOpen(prev=>!prev)
  }
    
  return(
    <Slide
      appear={false}
      direction='down'
      in={!trigger}
    >
    <AppBar className={classes.bar} position='fixed'>
      <Toolbar className={classes.bar}>
        <Button onClick={()=>handlePortfolioScroll()}>Projects</Button>
        <Button onClick={()=>handleAboutScroll()}>About</Button>
        <Button onClick={()=>handleContactScroll()}>Contact</Button>
        <Button
          ref={anchorRef}
          onMouseEnter={()=>setOpen(prev=>!prev)}
          onMouseLeave={()=>setOpen(prev=>!prev)}
          >
          Links
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
                      GitHub
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
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
          )}
        </Popper>
      </Toolbar>
    </AppBar>
    </Slide>
  )
};
export default Header;