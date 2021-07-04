import React from 'react';
import Controls from './Controls';
import './navigation.css';

const Navigation = () =>{
  return(
    <div className='navContainer'>
      <h1 style={{margin: '0'}}>Jake<br></br>Thrasher</h1>
      <Controls/>
    </div>
  );
};

export default Navigation;