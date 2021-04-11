import './GraphSelector.css';
import React, { useState } from 'react';


function GraphSelector (props) {

    return <div className="selectDiv">
        {/* <span className="label customH2Dark">Select a Graph:</span> */}
        <div className="dropDiv">
            <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                <option value="casesByDay">Cases by Day</option>
                <option value="casesByMonth">Cases by Month</option>
                <option value="casesByRegion">Cases by Region</option>
                <option hidden={true} value="casesByRegion">Cases by Region</option>
            </select>
        </div>
        
    </div>
}
export default GraphSelector;