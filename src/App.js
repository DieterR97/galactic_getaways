
import React, { useState } from 'react';
import './App.css';
// import '../src/components/heronav.css';
import HeroImage from './components/HeroImage';
import HeroImage2 from './components/HeroImage2';
import Logo from './images/Logo.png';

function App() {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>

      {/* ==========================NAVBAR========================== */}
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar scroll</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Link</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">


          <div className='navHolder'>

            {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
            <img src={Logo} className='Logo'></img>


            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse navbar-container" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li> */}
                <li className={activeLink === 'link1' ? 'nav-link active-link' : 'nav-link'} onClick={() => handleLinkClick('link1')}>
                  <a href="#">Home</a>
                  <div class="underline"></div>
                </li>
                <li className={activeLink === 'link2' ? 'nav-link active-link' : 'nav-link'} onClick={() => handleLinkClick('link2')}>
                  <a href="#">Destinations</a>
                  <div class="underline"></div>
                </li>
              </ul>
            </div>

          </div>

          {/* <span class="navbar-text">
            Navbar text with an inline element
          </span> */}

          <button type="button" class="btn btn-primary btn-lg">Large button</button>


        </div>
      </nav>

      {/* ==========================HERO IMAGE========================== */}

      {/* <HeroImage></HeroImage> */}

      <HeroImage2></HeroImage2>

      <h3 className='newSec'>
        A Stellar Selection
      </h3>

      <h5 className='newSec2'>
        Explore three breathtaking destinations, each with its own unique charm and mystery.
      </h5>

    </>
  );

}



export default App;
