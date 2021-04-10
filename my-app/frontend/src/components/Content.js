import './Content.css';
import Graph from './Graph';
import ColorblindButton from './ColorblindButton';
import GraphSelector from './GraphSelector';
import React, { useState } from 'react';

function Content() {

    const [graphTypeState, setGraphTypeState] = useState("casesByDay");

    var graphKind;
    var graphXAxis = [];
    var graphYAxis = [];
    var graphLabel = [];

    var objetoTest = {
        cases:{
            casesByDay:{
                xAxis: ["7", "8", "9", "10", "11", "12", "13"],
                yAxis: [120, 190, 300, 500, 200, 300, 330],
                label: "#s of Cases"
            },
            casesByMonth:{
                xAxis: ["November, 20","December, 20","January, 21","February, 21","March, 21", "April, 21"],
                yAxis: [1200, 1900, 3000, 5000, 2000, 3000],
                label: "Positive Cases"
            },
            casesByRegion:{
                xAxis: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6", ],
                yAxis: [1200, 190, 300, 50, 2000, 30000],
                label: "Positive Cases"
            },
        },
    };


    if (graphTypeState == "casesByDay")
        {
            graphKind = "line";
            graphXAxis = objetoTest.cases.casesByDay.xAxis;
            graphYAxis = objetoTest.cases.casesByDay.yAxis;
            graphLabel = objetoTest.cases.casesByDay.label;
        }
    else if (graphTypeState == "casesByMonth")
        {
            graphKind = "bar";
            graphXAxis = objetoTest.cases.casesByDay.xAxis;
            graphYAxis = objetoTest.cases.casesByDay.yAxis;
            graphLabel = objetoTest.cases.casesByDay.label;
        }
    else if (graphTypeState == "casesByRegion")
        {
            graphKind = "pie";
            graphXAxis = objetoTest.cases.casesByDay.xAxis;
            graphYAxis = objetoTest.cases.casesByDay.yAxis;
            graphLabel = objetoTest.cases.casesByDay.label;
        }

    //green&blue default =  #007965, #018383, #2d6187,, #75daad
    //blue&yellow deuteronopia = #f9f871, #fddb3a, #fff600,, #28527a
    //red&blue tritanopia = #e84545, #e40017, #91091e,, #28527a

    const [lightColor, setLightColor] = useState('#e84545'); 
    const [normalColor, setNormalColor] = useState('#e40017'); 
    const [darkColor, setDarkColor] = useState('#91091e'); 
    const [lineColor, setLineColor] = useState('#28527a');

    



    return <div className="content">
        <ColorblindButton setLightColor={setLightColor} setNormalColor={setNormalColor} setDarkColor={setDarkColor} setLineColor={setLineColor}/>
        <GraphSelector graphType={graphTypeState} setGraphType={setGraphTypeState}/>
        <Graph graph={graphKind} xAxis={graphXAxis} yAxis={graphYAxis} Label={graphLabel} lightColor={lightColor} normalColor={normalColor} darkColor={darkColor} lineColor={lineColor}/>
    </div>
}
export default Content;