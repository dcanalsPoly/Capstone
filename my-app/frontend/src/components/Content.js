import './Content.css';
import Graph from './Graph';
import ColorblindButton from './ColorblindButton';
import GraphSelector from './GraphSelector';
import GraphTab from './GraphTab';
import React, { useState } from 'react';

function Content() {
    //
    //Graph dropdown
    //
    const [graphTypeState, setGraphTypeState] = useState("casesByDay");

    var graphKind;
    var graphXAxis = [];
    var graphYAxis = [];
    var graphLabel = [];

    var objetoTest = {
        cases:{
            byDay:{
                xAxis: ["7", "8", "9", "10", "11", "12", "13"],
                yAxis: [120, 190, 300, 500, 200, 300, 330],
                label: "Positive Cases"
            },
            byMonth:{
                xAxis: ["November, 20","December, 20","January, 21","February, 21","March, 21", "April, 21"],
                yAxis: [1200, 1900, 3000, 5000, 2000, 3000],
                label: "Positive Cases"
            },
            byRegion:{
                xAxis: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6", ],
                yAxis: [1200, 190, 300, 50, 2000, 30000],
                label: "Positive Cases"
            },
        },
        deaths:{
            byDay:{
                xAxis: ["7", "8", "9", "10", "11", "12", "13"],
                yAxis: [120, 190, 300, 500, 200, 300, 330],
                label: "# of Deaths"
            },
            byMonth:{
                xAxis: ["November, 20","December, 20","January, 21","February, 21","March, 21", "April, 21"],
                yAxis: [1200, 1900, 3000, 5000, 2000, 3000],
                label: "# of Deaths"
            },
            byRegion:{
                xAxis: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6", ],
                yAxis: [1200, 190, 300, 50, 2000, 30000],
                label: "# of Deaths"
            },
        },
        vaccinations:{
            byDay:{
                xAxis: ["7", "8", "9", "10", "11", "12", "13"],
                yAxis: [120, 190, 300, 500, 200, 300, 330],
                label: "# of Vaccinations"
            },
            byMonth:{
                xAxis: ["November, 20","December, 20","January, 21","February, 21","March, 21", "April, 21"],
                yAxis: [1200, 1900, 3000, 5000, 2000, 3000],
                label: "# of Vaccinations"
            },
            byRegion:{
                xAxis: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6", ],
                yAxis: [1200, 190, 300, 50, 2000, 30000],
                label: "# of Vaccinations"
            },
        },
        //we have to set up this to work with more than one dataset
        mix:{
            byDay:{
                xAxis: ["7", "8", "9", "10", "11", "12", "13"],
                yAxis: [120, 190, 300, 500, 200, 300, 330],
                label: "# of Mix"
            },
            byMonth:{
                xAxis: ["November, 20","December, 20","January, 21","February, 21","March, 21", "April, 21"],
                yAxis: [1200, 1900, 3000, 5000, 2000, 3000],
                label: "# of Mix"
            },
            byRegion:{
                xAxis: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6", ],
                yAxis: [1200, 190, 300, 50, 2000, 30000],
                label: "# of Mix"
            },
        }
    };


    if (graphTypeState == "casesByDay")
    {
        graphKind = "line";
        graphXAxis = objetoTest.cases.byDay.xAxis;
        graphYAxis = objetoTest.cases.byDay.yAxis;
        graphLabel = objetoTest.cases.byDay.label;
    }
    else if (graphTypeState == "casesByMonth")
    {
        graphKind = "bar";
        graphXAxis = objetoTest.cases.byMonth.xAxis;
        graphYAxis = objetoTest.cases.byMonth.yAxis;
        graphLabel = objetoTest.cases.byMonth.label;
    }
    else if (graphTypeState == "casesByRegion")
    {
        graphKind = "pie";
        graphXAxis = objetoTest.cases.byRegion.xAxis;
        graphYAxis = objetoTest.cases.byRegion.yAxis;
        graphLabel = objetoTest.cases.byRegion.label;
    }
    //
    else if (graphTypeState == "deathsByDay")
    {
        graphKind = "line";
        graphXAxis = objetoTest.deaths.byDay.xAxis;
        graphYAxis = objetoTest.deaths.byDay.yAxis;
        graphLabel = objetoTest.deaths.byDay.label;
    }
    else if (graphTypeState == "deathsByMonth")
    {
        graphKind = "bar";
        graphXAxis = objetoTest.deaths.byMonth.xAxis;
        graphYAxis = objetoTest.deaths.byMonth.yAxis;
        graphLabel = objetoTest.deaths.byMonth.label;
    }
    else if (graphTypeState == "deathsByRegion")
    {
        graphKind = "pie";
        graphXAxis = objetoTest.deaths.byRegion.xAxis;
        graphYAxis = objetoTest.deaths.byRegion.yAxis;
        graphLabel = objetoTest.deaths.byRegion.label;
    }
    //
    else if (graphTypeState == "vaccinationsByDay")
    {
        graphKind = "line";
        graphXAxis = objetoTest.vaccinations.byDay.xAxis;
        graphYAxis = objetoTest.vaccinations.byDay.yAxis;
        graphLabel = objetoTest.vaccinations.byDay.label;
    }
    else if (graphTypeState == "vaccinationsByMonth")
    {
        graphKind = "bar";
        graphXAxis = objetoTest.vaccinations.byMonth.xAxis;
        graphYAxis = objetoTest.vaccinations.byMonth.yAxis;
        graphLabel = objetoTest.vaccinations.byMonth.label;
    }
    else if (graphTypeState == "vaccinationsByRegion")
    {
        graphKind = "pie";
        graphXAxis = objetoTest.vaccinations.byRegion.xAxis;
        graphYAxis = objetoTest.vaccinations.byRegion.yAxis;
        graphLabel = objetoTest.vaccinations.byRegion.label;
    }
    //
    else if (graphTypeState == "mixByDay")
    {
        graphKind = "line";
        graphXAxis = objetoTest.mix.byDay.xAxis;
        graphYAxis = objetoTest.mix.byDay.yAxis;
        graphLabel = objetoTest.mix.byDay.label;
    }
    else if (graphTypeState == "mixByMonth")
    {
        graphKind = "bar";
        graphXAxis = objetoTest.mix.byMonth.xAxis;
        graphYAxis = objetoTest.mix.byMonth.yAxis;
        graphLabel = objetoTest.mix.byMonth.label;
    }
    else if (graphTypeState == "mixByRegion")
    {
        graphKind = "pie";
        graphXAxis = objetoTest.mix.byRegion.xAxis;
        graphYAxis = objetoTest.mix.byRegion.yAxis;
        graphLabel = objetoTest.mix.byRegion.label;
    }

    //
    //Colorblind
    //
    const [lightColor, setLightColor] = useState('#007965'); 
    const [normalColor, setNormalColor] = useState('#018383'); 
    const [darkColor, setDarkColor] = useState('#2d6187'); 
    const [lineColor, setLineColor] = useState('#75daad');

    function pieColorAmount () {
        var colors = [];
        var count = 0;
        for (var i = 0; i < graphYAxis.length; i++)
        {
            if (count == 0) {
                colors[i] = lightColor;
                count++;
            }
            else if (count == 1) {
                colors[i] = normalColor;
                count++;
            }
            else if (count == 2) {
                colors[i] = darkColor;
                count = 0;
            }
        }
        //
        return colors;
    }

    function lineAndBarColorAmount () {
        var colors = [];
        for (var i = 0; i < graphYAxis.length; i++)
        {
            colors[i] = normalColor;
        }
        //
        return colors;
    } 

    //
    //Graph Tab
    //
    const [tabType, setTabType] = useState("Cases");


    return <div className="content">
        <GraphTab setTabType={setTabType}/>
        <div className="contentRow">
            <span className="span"></span>
            <GraphSelector tabType={tabType} graphType={graphTypeState} setGraphType={setGraphTypeState}/>
            <ColorblindButton setLightColor={setLightColor} setNormalColor={setNormalColor} setDarkColor={setDarkColor} setLineColor={setLineColor}/>
        </div>
        <Graph graph={graphKind} xAxis={graphXAxis} yAxis={graphYAxis} Label={graphLabel} colors={graphKind === "pie" ? pieColorAmount() : lineAndBarColorAmount} lineColor={lineColor}/>
    </div>
}
export default Content;