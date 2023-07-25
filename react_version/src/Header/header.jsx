import React from 'react';
import SlideShow from '/Users/kexuanzhang/Desktop/new-app/src/SlideShow/SlideShow.jsx';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <div className='header'>

      <Link to="/"><h1>Sofas at U of T</h1></Link>

    </div>

  )
}

export default Header