import './Menu.css';
import React, { useState } from 'react';

function Menu() {
    
    const [clicked, setClicked] = useState(false);
    console.log(clicked);
    
    var clickedHome = 'menuButton';
    var clickedAbout = 'menuButton';
    var clickedContact = 'menuButton';
    if (clicked === "Home") {clickedHome = 'menuButtonClicked';}
    else if (clicked === "About us") {clickedAbout = 'menuButtonClicked';}
    else if (clicked === "Contact us") {clickedContact = 'menuButtonClicked';}

  return <div className="menu">
      <span  className={clickedHome} tabIndex='1' onClick={() => setClicked("Home")}>Home</span>
      <span className={clickedAbout} tabIndex='2' onClick={() => setClicked("About us")}>About us</span>
      <span className={clickedContact} tabIndex='3' onClick={() => setClicked("Contact us")}>Contact us</span>
  </div>
}
export default Menu;