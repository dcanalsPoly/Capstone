import './Content.css';
import Graph from './Graph';
import ColorblindButton from './ColorblindButton';
import React, { useState } from 'react';

function Content() {

    //green&blue default =  #007965, #018383, #2d6187,, #75daad
    //blue&yellow deuteronopia = #f9f871, #fddb3a, #fff600,, #28527a
    //red&blue tritanopia = #e84545, #e40017, #91091e,, #28527a

    const [lightColor, setLightColor] = useState('#e84545'); 
    const [normalColor, setNormalColor] = useState('#e40017'); 
    const [darkColor, setDarkColor] = useState('#91091e'); 
    const [lineColor, setLineColor] = useState('#28527a');

    return <div className="content">
        <ColorblindButton setLightColor={setLightColor} setNormalColor={setNormalColor} setDarkColor={setDarkColor} setLineColor={setLineColor}/>
        <Graph graph="pie" lightColor={lightColor} normalColor={normalColor} darkColor={darkColor} lineColor={lineColor}/>
    </div>
}
export default Content;