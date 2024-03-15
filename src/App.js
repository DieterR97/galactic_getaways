
import React, { useEffect, useState } from 'react';
import './App.css';
import HeroImage2 from './components/HeroImage2';
import Logo from './images/logo.png';
import mars from './images/Mars.png';
import pluto from './images/Pluto.png';
import saturn from './images/Saturn.png';
import mobileBG from './images/mobile_app_background.jfif';
import astronaut from './images/astronaut.png';
import iPhone15 from './images/iPhone15.png';

function App() {

  const [activeLink, setActiveLink] = useState('link1');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink('link1');

    window.scrollTo(0, 0);

    const clearAddressBar = () => {
      if (window.location.hash) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    clearAddressBar();

  }, []);

  const scrollToElement = () => {
    const element = document.getElementById('end');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      {/* ==========================NAVBAR========================== */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

          <div className='navHolder'>

            <img src={Logo} className='Logo'></img>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse navbar-container" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className={activeLink === 'link1' ? 'nav-link active-link' : 'nav-link'} onClick={() => handleLinkClick('link1')}>
                  <a href="#start">Home</a>
                  <div class="underline"></div>
                </li>
                <li className={activeLink === 'link2' ? 'nav-link active-link' : 'nav-link'} onClick={() => handleLinkClick('link2')}>
                  <a href="#mid">Destinations</a>
                  <div class="underline"></div>
                </li>
              </ul>
            </div>

          </div>

          <button type="button" class="btn btn-primary btn-lg" onClick={scrollToElement}>Large button</button>

        </div>
      </nav>

      {/* ==========================HERO IMAGE========================== */}
      <HeroImage2></HeroImage2>

      {/* ==========================DESTINATION CARDS========================== */}
      <h3 className='newSec' id='mid'>
        A Stellar Selection
      </h3>

      <h5 className='newSec2'>
        Explore three breathtaking destinations, each with its own unique charm and mystery.
      </h5>

      <div className='container destC'>
        <div className='row'>

          <div className='col-1'>

          </div>

          <div className='col-10'>

            <div class="row">

              <div class="col-4 destCard">
                <div class="card h-100">

                  <div class="card-body">
                    <img src={mars} className='planet-img'></img>
                  </div>

                  <div class="card-footer">
                    <small class="text-body-secondary">Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!</small>
                    <div className='seperation-container d-flex flex-column justify-content-center text-center'>
                      <div className='seperation-line'>
                      </div>
                    </div>
                    <div className='destination-heading'>
                      Mars
                    </div>
                  </div>

                </div>
              </div>

              <div class="col-4 destCard">
                <div class="card h-100">

                  <div class="card-body">
                    <img src={mars} className='planet-img'></img>
                  </div>

                  <div class="card-footer">
                    <small class="text-body-secondary">Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!</small>
                    <div className='seperation-container d-flex flex-column justify-content-center text-center'>
                      <div className='seperation-line'>
                      </div>
                    </div>
                    <div className='destination-heading'>
                      Mars
                    </div>
                  </div>

                </div>
              </div>

              <div class="col-4 destCard">
                <div class="card h-100">

                  <div class="card-body">
                    <img src={mars} className='planet-img'></img>
                  </div>

                  <div class="card-footer">
                    <small class="text-body-secondary">Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!</small>
                    <div className='seperation-container d-flex flex-column justify-content-center text-center'>
                      <div className='seperation-line'>
                      </div>
                    </div>
                    <div className='destination-heading'>
                      Mars
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className='col-1'></div>
        </div>
      </div>

      {/* ==========================MOBILE APP BG IMAGE========================== */}
      <div
        className='text-center bg-image2 content'
        style={{ backgroundImage: `url(${mobileBG})` }}
        id='end'
      >
      </div>






    </>
  );

}


export default App;
