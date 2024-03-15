import React from 'react';
import heroImg from "../images/Header_background.jfif";
import '../App.css';

export default function HeroImage2() {
    return (
        <>
            {/* ==========================HERO IMAGE & HERO TEXT========================== */}
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
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}