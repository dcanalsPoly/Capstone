import './GraphSelector.css';
import React, { useState } from 'react';


function GraphSelector (props) {

    return <div>
        <span className="label customH2Dark">Select a Graph:</span>
        <select className= "dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                <option value="casesByDay">Cases by Day</option>
                <option value="casesByMonth">Cases by Month</option>
                <option value="casesByRegion">Cases by Region</option>
                <option hidden={true} value="casesByRegion">Cases by Region</option>

        </select>
    </div>
}
export default GraphSelector;