import React from 'react';
import heroImg from "../images/Header_background.png";
// import './heronav.css';
import '../App.css';

export default function HeroImage2() {
    return (
        <>
            {/* <nav class="navbar">
                <div class="logo">Navbar 1</div>
                <div class="nav-menu">
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </div>
            </nav> */}

            <header style={{ paddingLeft: 0 }}>
                <div
                    className='p-5 text-center bg-image content'
                    style={{ backgroundImage: `url(${heroImg})` }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h4>Tired Of Global Warming?</h4>
                                <h1>Visit A
                                    Different Planet</h1>
                                <p>Welcome to Celestial Voyages, where your dreams of interplanetary exploration come to life. Join us in venturing beyond the stars, discovering the wonders of otherworldly landscapes.</p>
                                <div>
                                    <button type="button" class="btn btn-primary btn-lg">Destinations</button>
                                    <button type="button" class="btn btn-primary btn-lg">Stay up-to date</button>
                                </div>
                                {/* <h1 className='mb-3'>Heading</h1>
                                <h4 className='mb-3'>Subheading</h4>
                                <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    Call to action
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <div class="content" style={{ backgroundImage: `url(${heroImg})` }}>
                Content
            </div> */}

            {/* 
            <nav class="navbar">
                <div class="logo">Navbar 2</div>
                <div class="nav-menu">
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </div>
            </nav> */}

            {/* <div class="hero">
                Hero
            </div> */}
        </>
    );
}