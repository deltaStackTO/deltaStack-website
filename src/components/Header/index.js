import React from 'react';
import './Header.css';

import Logo from '../../assets/images/deltaStack_logo.png';
import Arrow from '../../assets/icons/pointing.svg';

function Header(props) {
   return (
      <header className="Header section">
        <div className="container py-5">
          <img src={ Logo } alt="logo" className="py-5"/>
          
          <div className="mx-auto">
            <h3>We build high quality software for businesses and companies.</h3>
          </div>
          
          <div id="see-more" className="">
            <p className="my-0">See more</p>
            <img id="down-arrow" src={ Arrow } alt="down-arrow"/>
          </div>
        </div>
      </header>
   );
}

export default Header;