
import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import HeroImage2 from './components/HeroImage2';
import Logo from './images/logo.png';
import mars from './images/Mars.png';
import pluto from './images/Pluto.png';
import saturn from './images/Saturn.png';
import mobileBG from './images/mobile_app_background.jfif';
import astronaut from './images/astronaut.png';
import iPhone15 from './images/iPhone15.png';
import instagram from './images/instagram.png';
import tiktok from './images/tiktok.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';

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
                  <a href="#start" className='navLink f-inter'>Home</a>
                  <div class="underline"></div>
                </li>
                <li className={activeLink === 'link2' ? 'nav-link active-link' : 'nav-link'} onClick={() => handleLinkClick('link2')}>
                  <a href="#mid" className='navLink f-inter'>Destinations</a>
                  <div class="underline"></div>
                </li>
              </ul>
            </div>

          </div>

          <button type="button" class="btn-get-app f-inter" onClick={scrollToElement}>Get the app</button>

        </div>
      </nav>

      {/* ==========================HERO IMAGE========================== */}
      <HeroImage2></HeroImage2>


      <div className='middle-section'>
        {/* ==========================DESTINATION CARDS========================== */}
        <h3 className='newSec f-bebas' id='mid'>
          A Stellar Selection
        </h3>

        <h5 className='newSec2 f-inter'>
          Explore three breathtaking destinations, each with its own unique charm and mystery.
        </h5>

        <div className='container-fluid destC'>
          <div className='row'>

            <div className='col-1'>

            </div>

            <div className='col-10 d-flex justify-content-center '>

              {/* <div className='container-fluid'>
            </div> */}
              <div class="row">

                <div class="col-4 d-flex justify-content-center planet-card">
                  <div class="card w-100 cardh">

                    <div class="card-body">
                      <img src={mars} className='planet-img'></img>
                    </div>

                    <div class="card-footer d-flex flex-column justify-content-between">
                      <div className='destination-heading f-bebas'>
                        Mars
                      </div>
                      <div className='seperation-container d-flex flex-column justify-content-center text-center'>
                        <div className='seperation-line'>
                        </div>
                      </div>
                      <small class="text-body-secondary w-100 f-inter">Engage in thrilling activities like rover expeditions and marvel at the breathtaking Martian sunsets. Say hey to Elon!</small>
                    </div>

                  </div>
                </div>

                <div class="col-4 d-flex justify-content-center planet-card">
                  <div class="card w-100 cardh">

                    <div class="card-body">
                      <img src={saturn} className='planet-img'></img>
                    </div>

                    <div class="card-footer d-flex flex-column justify-content-between">
                      <div className='destination-heading f-bebas'>
                        Saturn
                      </div>
                      <div className='seperation-container d-flex flex-column justify-content-center text-center'>
                        <div className='seperation-line'>
                        </div>
                      </div>
                      <small class="text-body-secondary w-100 f-inter">Experience weightlessness as you float among Saturn's rings to witness the grandeur of the gas giant from close quarters.</small>
                    </div>

                  </div>
                </div>

                <div class="col-4 d-flex justify-content-center planet-card">
                  <div class="card w-100 cardh">

                    <div class="card-body">
                      <img src={pluto} className='planet-img'></img>
                    </div>

                    <div class="card-footer d-flex flex-column justify-content-between">
                      <div className='destination-heading f-bebas'>
                        Pluto
                      </div>
                      <div className='seperation-container d-flex flex-column justify-content-center text-center'>
                        <div className='seperation-line'>
                        </div>
                      </div>
                      <small class="text-body-secondary w-100 f-inter">Uncover the mysteries of the distant dwarf “planet” Pluto. Traverse its icy plains that resides on the outskirts of our solar system.</small>
                    </div>

                  </div>
                </div>


              </div>
            </div>

            <div className='col-1'>

            </div>

          </div>
        </div>
      </div>



      {/* ==========================MOBILE APP BG IMAGE========================== */}
      <div class="ccontainer">

        <div
          className='text-center bg-image2 content iimage'
          style={{ backgroundImage: `url(${mobileBG})` }}
          id='end'
        >
        </div>

        <div class="ttext">

          <h3 className='newSec lt f-bebas'>
            THE STARS IN YOUR POCKET... Coming soon
          </h3>

          <h5 className='newSec2 lt2 f-inter'>
            We are very excited to launch our very own Celestial Voyages mobile application coming soon to the App Store & Google Play Store.
          </h5>

        </div>

        <img src={iPhone15} className='iphone'></img>

        <img src={astronaut} className='astronaut'></img>


      </div>

      {/* ==========================FOOTER========================== */}
      <div className='footer'>

        <div className='container-fluid subscribe-container'>
          <div className='subscribe'>
            <h3 className='subtext f-bebas'>Subscribe to stay updated</h3>
            <div className='inputrow'>
              <input className='inputField f-inter' type='text' name='name' placeholder='Space traveller name'></input>
              <input className='inputField f-inter' type='text' name='email' placeholder='Contact email address'></input>
              <button type="button" class="btn btn-primary btn-lg newsBTN f-inter">Join newsletter</button>
            </div>
          </div>
        </div>



        <div className='container-fluid last-info'>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-2 reg-box'>
              <img src={Logo} className='small-logo'></img>
              <div className='d-flex flex-row'>
                <p className='author-text f-inter'>Dieter &nbsp;</p>
                <p className='font-weight-bold author-text f-inter'>©&nbsp;&nbsp; 2024</p>
              </div>
            </div>
            <div className='col-5'></div>
            <div className='col-2 d-flex justify-content-center'>
              <ul className='links-footer'>
                <span className='font-weight-bold f-inter'>Links</span>
                <li><a href='#start' className='f-inter'>Home</a></li>
                <li><a href='#mid' className='f-inter'>Destinations</a></li>
                <li><a href='#end' className='f-inter'>Mobile App</a></li>
              </ul>
            </div>
            <div className='col-1 social-links'>
              <p className='social-text font-weight-bold f-inter'>Follow Us</p>
              <div>
                <a href='https://www.instagram.com/' target="_blank"><img src={instagram} className='social-icon'></img></a>
                <a href='https://www.tiktok.com/en/' target="_blank"><img src={tiktok} className='social-icon'></img></a>
              </div>
              <div>
                <a href='https://www.facebook.com/' target="_blank"><img src={facebook} className='social-icon'></img></a>
                <a href='https://twitter.com/?lang=en' target="_blank"><img src={twitter} className='social-icon'></img></a>
              </div>
            </div>
            <div className='col-1'></div>
          </div>
        </div>


      </div>


    </>
  );

}

export default App;
