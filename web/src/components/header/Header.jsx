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
})); 
const Header = () => {
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
        <AppBar className={classes.bar} position='static'>
        <Toolbar className={classes.bar}>
          <Button >Portfolio</Button>
          <Button >About</Button>
          <Button
            ref={anchorRef}
            onClick={()=>setOpen(prev=>!prev)}
            >
            Contact
          </Button>

          <Popper open={open} 
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
                variant='outlined'>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList  id="menu-list-grow">
                    <MenuItem>
                      <Link
                        style={{color:'black'}}
                        href='https://github.com/jakethrasher' 
                        target="_blank"
                        rel="noopener"
                      >
                        Github
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link 
                        style={{color:'black'}}
                        href='https://www.linkedin.com/in/m-jake-thrasher/' 
                        target="_blank"
                        rel="noopener"
                      >
                        LinkedIn
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        style={{color:'black'}} 
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
    )
};
export default Header;