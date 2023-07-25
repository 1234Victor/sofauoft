import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/navBar";
import SlideShow from '/Users/kexuanzhang/Desktop/new-app/src/SlideShow/SlideShow.jsx';
import Header from '/Users/kexuanzhang/Desktop/new-app/src/Header/header.jsx';
import Location from '/Users/kexuanzhang/Desktop/new-app/src/Locations/location.jsx';
import Contact from '/Users/kexuanzhang/Desktop/new-app/src/Contact/contact.jsx';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header/>
        <NavBar />
        <Routes>
          <Route exact path="/" component={App} />
          <Route exact path="/Location" component={Location} />
          <Route exact path="/Contact" component={Contact} />
        </Routes>
        <SlideShow/>
      </BrowserRouter>

    </div>
  );
}


export default App;
