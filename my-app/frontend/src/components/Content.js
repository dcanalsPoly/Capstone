import './Content.css';
import Graph from './Graph';
import ColorblindButton from './ColorblindButton';
import GraphSelector from './GraphSelector';
import GraphTab from './GraphTab';
import React, { useState, useEffect } from 'react';
//import axios from "axios";

function Content() {
    //
    //Country Selection
    //
    const [selection, setSelection] = useState("argentina");
    var countries = ["portugal", "south-africa", "denmark", "thailand", "uruguay", "argentina", "philippines", "bahamas", "jamaica", "taiwan", "greece", "cuba", "panama", "egypt", "norway", "dominican-republic", "guatemala", "south-korea", "venezuela", "israel"];
    //
    //Data Recollection
    //
    const [countryData, setCountryData] = useState({});  
    var counter = 0;
    const dataFetch = async () => {
        console.log('entered the dataFetc');
        await fetch('https://api.covid19api.com/live/country/' + selection + '/status/confirmed?from=2021-03-24T00:00:00Z&to=2021-04-01T00:00:00Z')
            .then(response => response.json())
            .then(data => 
                {
                    setCountryData(data[0]);
                    console.log(data[0]);
                    console.log(countryData);
                });
        counter++;
    };
    useEffect(() => {
        if (counter == 0)
            dataFetch();
    }, []);

    //
    //Graph dropdown
    //
    const [casesGraphType, setCasesGraphType] = useState("casesByDay");
    const [deathsGraphType, setDeathsGraphType] = useState("deathsByDay");
    const [recoveredGraphType, setRecoveredGraphType] = useState("recoveredByDay");
    const [activeGraphType, setActiveGraphType] = useState("activeByDay");

    var casesGraphKind;
    var casesGraphXAxis = [];
    var casesGraphYAxis = [];
    var casesGraphLabel = [];
    //
    var deathsGraphKind;
    var deathsGraphXAxis = [];
    var deathsGraphYAxis = [];
    var deathsGraphLabel = [];
    //
    var recoveredGraphKind;
    var recoveredGraphXAxis = [];
    var recoveredGraphYAxis = [];
    var recoveredGraphLabel = [];
    //
    var activeGraphKind;
    var activeGraphXAxis = [];
    var activeGraphYAxis = [];
    var activeGraphLabel = [];

    var objetoTest = {
        cases:{
            byDay:{
                xAxis: ["7", "8", "9", "10", "11", "12", "13"],
                yAxis: [1200, 1900, 3000, 5000, 2000, 3000],
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
        recovered:{
            byDay:{
                xAxis: ["7", "8", "9", "10", "11", "12", "13"],
                yAxis: [120, 190, 300, 500, 200, 300, 330],
                label: "# of Recovered"
            },
            byMonth:{
                xAxis: ["November, 20","December, 20","January, 21","February, 21","March, 21", "April, 21"],
                yAxis: [1200, 1900, 3000, 5000, 2000, 3000],
                label: "# of Recovered"
            },
            byRegion:{
                xAxis: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6", ],
                yAxis: [1200, 190, 300, 50, 2000, 30000],
                label: "# of Recovered"
            },
        },
        //we have to set up this to work with more than one dataset
        active:{
            byDay:{
                xAxis: ["7", "8", "9", "10", "11", "12", "13"],
                yAxis: [120, 190, 300, 500, 200, 300, 330],
                label: "# of Active"
            },
            byMonth:{
                xAxis: ["November, 20","December, 20","January, 21","February, 21","March, 21", "April, 21"],
                yAxis: [1200, 1900, 3000, 5000, 2000, 3000],
                label: "# of Active"
            },
            byRegion:{
                xAxis: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5", "Region 6", ],
                yAxis: [1200, 190, 300, 50, 2000, 30000],
                label: "# of Active"
            },
        }
    };


    if (casesGraphType === "casesByDay")
    {
        casesGraphKind = "line";
        casesGraphXAxis = objetoTest.cases.byDay.xAxis;
        casesGraphYAxis = objetoTest.cases.byDay.yAxis;
        casesGraphLabel = objetoTest.cases.byDay.label;
    }
    else if (casesGraphType === "casesByMonth")
    {
        casesGraphKind = "bar";
        casesGraphXAxis = objetoTest.cases.byMonth.xAxis;
        casesGraphYAxis = objetoTest.cases.byMonth.yAxis;
        casesGraphLabel = objetoTest.cases.byMonth.label;
    }
    else if (casesGraphType === "casesByRegion")
    {
        casesGraphKind = "pie";
        casesGraphXAxis = objetoTest.cases.byRegion.xAxis;
        casesGraphYAxis = objetoTest.cases.byRegion.yAxis;
        casesGraphLabel = objetoTest.cases.byRegion.label;
    }
    //
    if (deathsGraphType === "deathsByDay")
    {
        deathsGraphKind = "line";
        deathsGraphXAxis = objetoTest.deaths.byDay.xAxis;
        deathsGraphYAxis = objetoTest.deaths.byDay.yAxis;
        deathsGraphLabel = objetoTest.deaths.byDay.label;
    }
    else if (deathsGraphType === "deathsByMonth")
    {
        deathsGraphKind = "bar";
        deathsGraphXAxis = objetoTest.deaths.byMonth.xAxis;
        deathsGraphYAxis = objetoTest.deaths.byMonth.yAxis;
        deathsGraphLabel = objetoTest.deaths.byMonth.label;
    }
    else if (deathsGraphType === "deathsByRegion")
    {
        deathsGraphKind = "pie";
        deathsGraphXAxis = objetoTest.deaths.byRegion.xAxis;
        deathsGraphYAxis = objetoTest.deaths.byRegion.yAxis;
        deathsGraphLabel = objetoTest.deaths.byRegion.label;
    }
    //
    if (recoveredGraphType === "recoveredByDay")
    {
        recoveredGraphKind = "line";
        recoveredGraphXAxis = objetoTest.recovered.byDay.xAxis;
        recoveredGraphYAxis = objetoTest.recovered.byDay.yAxis;
        recoveredGraphLabel = objetoTest.recovered.byDay.label;
    }
    else if (recoveredGraphType === "recoveredByMonth")
    {
        recoveredGraphKind = "bar";
        recoveredGraphXAxis = objetoTest.recovered.byMonth.xAxis;
        recoveredGraphYAxis = objetoTest.recovered.byMonth.yAxis;
        recoveredGraphLabel = objetoTest.recovered.byMonth.label;
    }
    else if (recoveredGraphType === "recoveredByRegion")
    {
        recoveredGraphKind = "pie";
        recoveredGraphXAxis = objetoTest.recovered.byRegion.xAxis;
        recoveredGraphYAxis = objetoTest.recovered.byRegion.yAxis;
        recoveredGraphLabel = objetoTest.recovered.byRegion.label;
    }
    //
    if (activeGraphType === "activeByDay")
    {
        activeGraphKind = "line";
        activeGraphXAxis = objetoTest.active.byDay.xAxis;
        activeGraphYAxis = objetoTest.active.byDay.yAxis;
        activeGraphLabel = objetoTest.active.byDay.label;
    }
    else if (activeGraphType === "activeByMonth")
    {
        activeGraphKind = "bar";
        activeGraphXAxis = objetoTest.active.byMonth.xAxis;
        activeGraphYAxis = objetoTest.active.byMonth.yAxis;
        activeGraphLabel = objetoTest.active.byMonth.label;
    }
    else if (activeGraphType === "activeByRegion")
    {
        activeGraphKind = "pie";
        activeGraphXAxis = objetoTest.active.byRegion.xAxis;
        activeGraphYAxis = objetoTest.active.byRegion.yAxis;
        activeGraphLabel = objetoTest.active.byRegion.label;
    }

    //
    //Colorblind Variables
    //
    const [casesLightColor, setCasesLightColor] = useState('#007965'); 
    const [casesNormalColor, setCasesNormalColor] = useState('#018383'); 
    const [casesDarkColor, setCasesDarkColor] = useState('#2d6187'); 
    const [casesLineColor, setCasesLineColor] = useState('#75daad');
    //
    const [deathsLightColor, setDeathsLightColor] = useState('#007965'); 
    const [deathsNormalColor, setDeathsNormalColor] = useState('#018383'); 
    const [deathsDarkColor, setDeathsDarkColor] = useState('#2d6187'); 
    const [deathsLineColor, setDeathsLineColor] = useState('#75daad');
    //
    const [recoveredLightColor, setRecoveredLightColor] = useState('#007965'); 
    const [recoveredNormalColor, setRecoveredNormalColor] = useState('#018383'); 
    const [recoveredDarkColor, setRecoveredDarkColor] = useState('#2d6187'); 
    const [recoveredLineColor, setRecoveredLineColor] = useState('#75daad');
    //
    const [activeLightColor, setActiveLightColor] = useState('#007965'); 
    const [activeNormalColor, setActiveNormalColor] = useState('#018383'); 
    const [activeDarkColor, setActiveDarkColor] = useState('#2d6187'); 
    const [activeLineColor, setActiveLineColor] = useState('#75daad');

    function pieColorAmount (lightColor, normalColor, darkColor, graphYAxis) {
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

    function lineAndBarColorAmount (normalColor, graphYAxis) {
        var colors = [];
        for (var i = 0; i < graphYAxis.length; i++)
        {
            colors[i] = normalColor;
        }
        //
        return colors;
    } 

    return <div className="content">
        <div className="selectDiv">
            <div className="dropDiv">
                <select className= "tester dropButton customH2Dark" onChange={(e) => {setSelection(e.target.value);}}>
                    <option value="argentina">Argentina</option>
                    <option value="bahamas">Bahamas</option>
                    <option value="cuba">Cuba</option>
                    <option value="denmark">Denmark</option>
                    <option value="dominican-republic">Dominican Republic</option>
                    <option value="egypt">Egypt</option>
                    <option value="greece">Greece</option>
                    <option value="guatemala">Guatemala</option>
                    <option value="israel">Israel</option>
                    <option value="jamaica">Jamaica</option>
                    <option value="norway">Norway</option>
                    <option value="panama">Panama</option>
                    <option value="philippines">Philippines</option>
                    <option value="portugal">Portugal</option>
                    <option value="south-africa">South Africa</option>
                    <option value="south-korea">South Korea</option>
                    <option value="taiwan">Taiwan</option>                    
                    <option value="thailand">Thailand</option>
                    <option value="uruguay">Uruguay</option>
                    <option value="venezuela">Venezuela</option>
                </select>
            </div>
        </div>

        <div className="graphRow padding">
            {/*Cases*/}
            <div className="graphColumn">
                <div className="graphOptions">
                    <span className="span"></span>
                    <GraphSelector tabType={"Cases"} graphType={casesGraphType} setGraphType={setCasesGraphType}/>
                    <ColorblindButton setLightColor={setCasesLightColor} setNormalColor={setCasesNormalColor} setDarkColor={setCasesDarkColor} setLineColor={setCasesLineColor}/>
                </div>
                <Graph graph={casesGraphKind} xAxis={casesGraphXAxis} yAxis={casesGraphYAxis} Label={casesGraphLabel} colors={casesGraphKind === "pie" ? pieColorAmount(casesLightColor, casesNormalColor, casesDarkColor, casesGraphYAxis) : lineAndBarColorAmount(casesNormalColor, casesGraphYAxis)} lineColor={casesLineColor}/>
            </div>
            
            {/*Deaths*/}
            <div className="graphColumn">
                <div className="graphOptions">
                    <span className="span"></span>
                    <GraphSelector tabType={"Deaths"} graphType={deathsGraphType} setGraphType={setDeathsGraphType}/>
                    <ColorblindButton setLightColor={setDeathsLightColor} setNormalColor={setDeathsNormalColor} setDarkColor={setDeathsDarkColor} setLineColor={setDeathsLineColor}/>
                </div>
                <Graph graph={deathsGraphKind} xAxis={deathsGraphXAxis} yAxis={deathsGraphYAxis} Label={deathsGraphLabel} colors={deathsGraphKind === "pie" ? pieColorAmount(deathsLightColor, deathsNormalColor, deathsDarkColor, deathsGraphYAxis) : lineAndBarColorAmount(deathsNormalColor, deathsGraphYAxis)} lineColor={deathsLineColor}/>
            </div>
        </div>
        
        <div className="graphRow padding">
            {/*Recovered*/}
            <div className="graphColumn">
                <div className="graphOptions">
                    <span className="span"></span>
                    <GraphSelector tabType={"Recovered"} graphType={recoveredGraphType} setGraphType={setRecoveredGraphType}/>
                    <ColorblindButton setLightColor={setRecoveredLightColor} setNormalColor={setRecoveredNormalColor} setDarkColor={setRecoveredDarkColor} setLineColor={setRecoveredLineColor}/>
                </div>
                <Graph graph={recoveredGraphKind} xAxis={recoveredGraphXAxis} yAxis={recoveredGraphYAxis} Label={recoveredGraphLabel} colors={recoveredGraphKind === "pie" ? pieColorAmount(recoveredLightColor, recoveredNormalColor, recoveredDarkColor, recoveredGraphYAxis) : lineAndBarColorAmount(recoveredNormalColor, recoveredGraphYAxis)} lineColor={recoveredLineColor}/>
            </div>

            {/*Active*/}
            <div className="graphColumn">
                <div className="graphOptions">
                    <span className="span"></span>
                    <GraphSelector tabType={"Active"} graphType={activeGraphType} setGraphType={setActiveGraphType}/>
                    <ColorblindButton setLightColor={setActiveLightColor} setNormalColor={setActiveNormalColor} setDarkColor={setActiveDarkColor} setLineColor={setActiveLineColor}/>
                </div>
                <Graph graph={activeGraphKind} xAxis={activeGraphXAxis} yAxis={activeGraphYAxis} Label={activeGraphLabel} colors={activeGraphKind === "pie" ? pieColorAmount(activeLightColor, activeNormalColor, activeDarkColor, activeGraphYAxis) : lineAndBarColorAmount(activeNormalColor, activeGraphYAxis)} lineColor={activeLineColor}/>
            </div>
        </div>
    </div>
}
export default Content;