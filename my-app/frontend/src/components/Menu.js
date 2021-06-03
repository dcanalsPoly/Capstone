import './Menu.css';
import React, { useState } from 'react';
import {Link} from 'react-scroll';

function Menu() {
    
    const [clicked, setClicked] = useState(false);
    console.log(clicked);
    
    var clickedGraphs = 'menuButton';
    var clickedReport = 'menuButton';
    var clickedReferences = 'menuButton';
    var clickedContact = 'menuButton';

    if (clicked === "Graphs") {clickedGraphs = 'menuButtonClicked';}
    else if (clicked === "Report") {clickedReport = 'menuButtonClicked';}
    else if (clicked === "References") {clickedReferences = 'menuButtonClicked';}
    else if (clicked === "Contact us") {clickedContact = 'menuButtonClicked';}

  return <div className="menuRow">
      <span  className={clickedGraphs} onClick={() => setClicked("Graphs")}>
        <Link to="graphs" offset={-220} spy={true} smooth={true}>Graphs</Link>
      </span>
      <span className={clickedReport} onClick={() => setClicked("Report")}>
        <Link to="report" offset={-95} spy={true} smooth={true}>Report</Link>
      </span>
      <span className={clickedReferences} onClick={() => setClicked("References")}>
        <Link to="references" offset={-95} spy={true} smooth={true}>References</Link>
      </span>
      <span className={clickedContact} onClick={() => setClicked("Contact us")}>
        <Link to="contact" offset={-95} spy={true} smooth={true}>Contact us</Link>
      </span>
  </div>
}
export default Menu;