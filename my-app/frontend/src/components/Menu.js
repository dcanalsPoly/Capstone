import './Menu.css';
import React, { useState } from 'react';

function Menu() {
    
    const [clicked, setClicked] = useState(false);
    console.log(clicked);
    
    var clickedGraphs = 'menuButton';
    var clickedAbout = 'menuButton';
    var clickedContact = 'menuButton';
    if (clicked === "Graphs") {clickedGraphs = 'menuButtonClicked';}
    else if (clicked === "About us") {clickedAbout = 'menuButtonClicked';}
    else if (clicked === "Contact us") {clickedContact = 'menuButtonClicked';}

  return <div className="menuRow">
      <span  className={clickedGraphs} tabIndex='1' onClick={() => setClicked("Graphs")}>Graphs</span>
      <span className={clickedAbout} tabIndex='2' onClick={() => setClicked("About us")}>About us</span>
      <span className={clickedContact} tabIndex='3' onClick={() => setClicked("Contact us")}>Contact us</span>
  </div>
}
export default Menu;