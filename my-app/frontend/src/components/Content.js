import './Content.css';
import Graph from './Graph';
import ColorblindButton from './ColorblindButton';
import GraphSelector from './GraphSelector';
import React, { useState } from 'react';

function Content() {

    //green&blue default =  #007965, #018383, #2d6187,, #75daad
    //blue&yellow deuteronopia = #f9f871, #fddb3a, #fff600,, #28527a
    //red&blue tritanopia = #e84545, #e40017, #91091e,, #28527a

    const [lightColor, setLightColor] = useState('#e84545'); 
    const [normalColor, setNormalColor] = useState('#e40017'); 
    const [darkColor, setDarkColor] = useState('#91091e'); 
    const [lineColor, setLineColor] = useState('#28527a');
    const [graphKind, setGraphKind] = useState('line');
    const [graphXAxis, setGraphXAxis] = useState(["7", "8", "9", "10", "11", "12", "13"]);
    const [graphYAxis, setGraphYAxis] = useState([12, 19, 3, 5, 2, 3]);
    const [graphLabel, setGraphLabel] = useState("#s of Cases");



    return <div className="content">
        <ColorblindButton setLightColor={setLightColor} setNormalColor={setNormalColor} setDarkColor={setDarkColor} setLineColor={setLineColor}/>
        <GraphSelector setGraphKind={setGraphKind} setXAxis={setGraphXAxis} setYAxis={setGraphYAxis} setLabel={setGraphLabel}/>
        <Graph graph={graphKind} xAxis={graphXAxis} yAxis={graphYAxis} Label={graphLabel} lightColor={lightColor} normalColor={normalColor} darkColor={darkColor} lineColor={lineColor}/>
    </div>
}
export default Content;