import './GraphSelector.css';
import React, { useState } from 'react';


function GraphSelector (props) {

    if (props.tabType === "Cases")
    {
        return <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                    <option value="casesByDay">Cases by Day</option>
                    <option value="casesByMonth">Cases by Month</option>
                    <option value="casesByRegion">Cases by Region</option>
                </select>
            </div>
        </div>
    }
    else if (props.tabType === "Deaths")
    {
        return <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                    <option value="deathsByDay">Deaths by Day</option>
                    <option value="deathsByMonth">Deaths by Month</option>
                    <option value="deathsByRegion">Deaths by Region</option>
                </select>
            </div>
        </div>
    }
    else if (props.tabType === "Vaccinations")
    {
        return <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                    <option value="vaccinationsByDay">Vaccinations by Day</option>
                    <option value="vaccinationsByMonth">Vaccinations by Month</option>
                    <option value="vaccinationsByRegion">Vaccinations by Region</option>
                </select>
            </div>
        </div>
    }
    //set up this part
    else if (props.tabType === "Mix")
    {
        return <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {props.setGraphType(e.target.value);}}>
                    <option value="mixByDay">Mix by Day</option>
                    <option value="mixByMonth">Mix by Month</option>
                    <option value="mixByRegion">Mix by Region</option>
                </select>
            </div>
        </div>
    }

    
}
export default GraphSelector;