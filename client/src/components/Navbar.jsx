import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav >
      <div>
        <img src="../src/assets/star-wars-icon.png" />
      </div>
        <p>
            Star Wars App
        </p>
      <div className='link'>
        <Link to="/" className= 'home'>Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;