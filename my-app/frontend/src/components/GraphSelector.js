import './GraphSelector.css';
import React, { useState } from 'react';


function GraphSelector (props) {

    if (props.tabType === "Cases")
    {
        return <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                    <option value="casesLine">Line Graph</option>
                    <option value="casesBar">Bar Graph</option>
        
                </select>
            </div>
        </div>
    }
    else if (props.tabType === "Deaths")
    {
        return <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                    <option value="deathsBar">Bar Graph</option>
                    <option value="deathsLine">Line Graph</option>
                    
                </select>
            </div>
        </div>
    }
    else if (props.tabType === "Recovered")
    {
        return <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                    <option value="recoveredBar">Bar Graph</option>
                    <option value="recoveredLine">Line Graph</option>
                    
                </select>
            </div>
        </div>
    }
    //set up this part
    else if (props.tabType === "Active")
    {
        return <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                    <option value="activeLine">Line Graph</option>
                    <option value="activeBar">Bar Graph</option>
                    
                </select>
            </div>
        </div>
    }

    
}
export default GraphSelector;