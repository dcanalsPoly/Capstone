import './Menu.css';
import React, { useState } from 'react';
import {Link} from 'react-scroll';

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
      <span  className={clickedGraphs} onClick={() => setClicked("Graphs")}>
        <Link to="graphs" offset={-95} spy={true} smooth={true}>Graphs</Link>
      </span>
      <span className={clickedAbout} onClick={() => setClicked("About us")}>About us</span>
      <span className={clickedContact} onClick={() => setClicked("Contact us")}>Contact us</span>
  </div>
}
export default Menu;

/*

*/ 