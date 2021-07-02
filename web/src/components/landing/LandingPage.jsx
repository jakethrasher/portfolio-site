import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import './landing.css'
export default function LandingPage() {
    return (
        <div className='mainContainer'>
            <Header/>
            <About/>
        </div>
    )
}
