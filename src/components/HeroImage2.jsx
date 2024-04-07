import React from 'react';
import heroImg from "../images/Header_background.jfif";
import '../App.css';
import '../index.css';

export default function HeroImage2() {

    const scrollToElement = () => {
        const element = document.getElementById('end');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToElementM = () => {
        const element = document.getElementById('mid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* ==========================HERO IMAGE & HERO TEXT========================== */}
            <header style={{ paddingLeft: 0 }}>
                <div
                    className='p-5 text-center bg-image content'
                    style={{ backgroundImage: `url(${heroImg})` }}
                >
                    <div className='mask'>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h4 className='q f-inter'>Tired Of Global Warming?</h4>
                                <h1 className='cta f-bebas'>Visit A<br></br>
                                    Different Planet</h1>
                                <p className='welcome f-roboto'>Welcome to Celestial Voyages, where your dreams of interplanetary exploration come to life. Join us in venturing beyond the stars, discovering the wonders of otherworldly landscapes.</p>
                                <div className='d-flex flex-row justify-content-center text-center topBtns'>
                                    <button type="button" class="destination-btn f-inter" onClick={scrollToElementM}>Destinations</button>
                                    <button type="button" class="stay-btn f-inter" onClick={scrollToElement}>Stay up-to date</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}