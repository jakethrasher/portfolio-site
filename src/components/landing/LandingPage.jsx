import React from 'react';
import About from '../about/About';
import Navigation from '../nav/Navigation';
import './landing.css'
export default function LandingPage() {
    return (
        <div className='mainContainer'>
            <Navigation/>
            <About/>
        </div>
    )
}
