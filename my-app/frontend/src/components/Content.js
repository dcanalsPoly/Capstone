import './Content.css';
import Graph from './Graph';
import ColorblindButton from './ColorblindButton';
import React, { useState } from 'react';

function Content() {

    //green&blue default =          #007965, #018383, #2d6187,, #75daad
    //blue&yellow deuteronopia =    #f9f871, #fddb3a, #fff600,, #28527a
    //red&blue tritanopia =         #e84545, #e40017, #91091e,, #28527a

    const [lightColor, setLightColor] = useState('#007965'); 
    const [normalColor, setNormalColor] = useState('#018383'); 
    const [darkColor, setDarkColor] = useState('#2d6187'); 
    const [lineColor, setLineColor] = useState('#75daad');

    return <div className="content">
        <ColorblindButton setLightColor={setLightColor} setNormalColor={setNormalColor} setDarkColor={setDarkColor} setLineColor={setLineColor}/>
        <Graph graph="pie" lightColor={lightColor} normalColor={normalColor} darkColor={darkColor} lineColor={lineColor}/>
    </div>
}
export default Content;