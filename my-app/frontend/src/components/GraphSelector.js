import './GraphSelector.css';
import React, { useState } from 'react';


function GraphSelector (props) {
    const [graphType, setGraphType] = useState();

    return <div>
        <span className="label customH2Dark">Select a Graph:</span>
        <select className= "dropButton customH2Dark" onChange=
        {
            (e) => 
                    {setGraphType(e.target.value);
                    if (graphType == "casesByDay")
                    {
                        props.setGraphKind('line');
                        props.setXAxis(["7", "8", "9", "10", "11", "12", "13"]);
                        props.setYAxis([120, 190, 300, 500, 200, 300, 330]);
                        props.setLabel("#s of Cases");
                    }
                    else if (graphType == "casesByMonth")
                    {
                        props.setGraphKind('bar');
                        props.setXAxis(["November, 20","December, 20","January, 21","February, 21","March, 21", "April, 21"]);
                        props.setYAxis([1200, 1900, 3000, 5000, 2000, 3000]);
                        props.setLabel("Positive Cases");
                    }
                    else if (graphType == "casesByRegion")
                    {
                        props.setGraphKind('pie');
                        props.setXAxis(["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6", ]);
                        props.setYAxis([1200, 190, 300, 50, 2000, 30000]);
                        props.setLabel("Positive Cases");
                    }
                }
            }>
                <option value="casesByDay">Cases by Day</option>
                <option value="casesByMonth">Cases by Month</option>
                <option value="casesByRegion">Cases by Region</option>
                <option hidden={true} value="casesByRegion">Cases by Region</option>

        </select>
    </div>
}
export default GraphSelector;