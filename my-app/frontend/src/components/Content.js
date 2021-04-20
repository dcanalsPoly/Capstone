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
    const [casesGraphType, setCasesGraphType] = useState("casesByDay");
    const [deathsGraphType, setDeathsGraphType] = useState("deathsByDay");
    const [vaccinationisGraphType, setVaccinationsGraphType] = useState("vaccinationsByDay");
    const [mixGraphType, setMixGraphType] = useState("mixByDay");

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
    var vaccinationsGraphKind;
    var vaccinationsGraphXAxis = [];
    var vaccinationsGraphYAxis = [];
    var vaccinationsGraphLabel = [];
    //
    var mixGraphKind;
    var mixGraphXAxis = [];
    var mixGraphYAxis = [];
    var mixGraphLabel = [];

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


    if (casesGraphType == "casesByDay")
    {
        casesGraphKind = "line";
        casesGraphXAxis = objetoTest.cases.byDay.xAxis;
        casesGraphYAxis = objetoTest.cases.byDay.yAxis;
        casesGraphLabel = objetoTest.cases.byDay.label;
    }
    else if (casesGraphType == "casesByMonth")
    {
        casesGraphKind = "bar";
        casesGraphXAxis = objetoTest.cases.byMonth.xAxis;
        casesGraphYAxis = objetoTest.cases.byMonth.yAxis;
        casesGraphLabel = objetoTest.cases.byMonth.label;
    }
    else if (casesGraphType == "casesByRegion")
    {
        casesGraphKind = "pie";
        casesGraphXAxis = objetoTest.cases.byRegion.xAxis;
        casesGraphYAxis = objetoTest.cases.byRegion.yAxis;
        casesGraphLabel = objetoTest.cases.byRegion.label;
    }
    //
    if (deathsGraphType == "deathsByDay")
    {
        deathsGraphKind = "line";
        deathsGraphXAxis = objetoTest.deaths.byDay.xAxis;
        deathsGraphYAxis = objetoTest.deaths.byDay.yAxis;
        deathsGraphLabel = objetoTest.deaths.byDay.label;
    }
    else if (deathsGraphType == "deathsByMonth")
    {
        deathsGraphKind = "bar";
        deathsGraphXAxis = objetoTest.deaths.byMonth.xAxis;
        deathsGraphYAxis = objetoTest.deaths.byMonth.yAxis;
        deathsGraphLabel = objetoTest.deaths.byMonth.label;
    }
    else if (deathsGraphType == "deathsByRegion")
    {
        deathsGraphKind = "pie";
        deathsGraphXAxis = objetoTest.deaths.byRegion.xAxis;
        deathsGraphYAxis = objetoTest.deaths.byRegion.yAxis;
        deathsGraphLabel = objetoTest.deaths.byRegion.label;
    }
    //
    if (vaccinationisGraphType == "vaccinationsByDay")
    {
        vaccinationsGraphKind = "line";
        vaccinationsGraphXAxis = objetoTest.vaccinations.byDay.xAxis;
        vaccinationsGraphYAxis = objetoTest.vaccinations.byDay.yAxis;
        vaccinationsGraphLabel = objetoTest.vaccinations.byDay.label;
    }
    else if (vaccinationisGraphType == "vaccinationsByMonth")
    {
        vaccinationsGraphKind = "bar";
        vaccinationsGraphXAxis = objetoTest.vaccinations.byMonth.xAxis;
        vaccinationsGraphYAxis = objetoTest.vaccinations.byMonth.yAxis;
        vaccinationsGraphLabel = objetoTest.vaccinations.byMonth.label;
    }
    else if (vaccinationisGraphType == "vaccinationsByRegion")
    {
        vaccinationsGraphKind = "pie";
        vaccinationsGraphXAxis = objetoTest.vaccinations.byRegion.xAxis;
        vaccinationsGraphYAxis = objetoTest.vaccinations.byRegion.yAxis;
        vaccinationsGraphLabel = objetoTest.vaccinations.byRegion.label;
    }
    //
    if (mixGraphType == "mixByDay")
    {
        mixGraphKind = "line";
        mixGraphXAxis = objetoTest.mix.byDay.xAxis;
        mixGraphYAxis = objetoTest.mix.byDay.yAxis;
        mixGraphLabel = objetoTest.mix.byDay.label;
    }
    else if (mixGraphType == "mixByMonth")
    {
        mixGraphKind = "bar";
        mixGraphXAxis = objetoTest.mix.byMonth.xAxis;
        mixGraphYAxis = objetoTest.mix.byMonth.yAxis;
        mixGraphLabel = objetoTest.mix.byMonth.label;
    }
    else if (mixGraphType == "mixByRegion")
    {
        mixGraphKind = "pie";
        mixGraphXAxis = objetoTest.mix.byRegion.xAxis;
        mixGraphYAxis = objetoTest.mix.byRegion.yAxis;
        mixGraphLabel = objetoTest.mix.byRegion.label;
    }

    //
    //Colorblind
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
    const [vaccinationsLightColor, setVaccinationsLightColor] = useState('#007965'); 
    const [vaccinationsNormalColor, setVaccinationsNormalColor] = useState('#018383'); 
    const [vaccinationsDarkColor, setVaccinationsDarkColor] = useState('#2d6187'); 
    const [vaccinationsLineColor, setVaccinationsLineColor] = useState('#75daad');
    //
    const [mixLightColor, setMixLightColor] = useState('#007965'); 
    const [mixNormalColor, setMixNormalColor] = useState('#018383'); 
    const [mixDarkColor, setMixDarkColor] = useState('#2d6187'); 
    const [mixLineColor, setMixLineColor] = useState('#75daad');

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
            {/*Vaccinations*/}
            <div className="graphColumn">
                <div className="graphOptions">
                    <span className="span"></span>
                    <GraphSelector tabType={"Vaccinations"} graphType={vaccinationisGraphType} setGraphType={setVaccinationsGraphType}/>
                    <ColorblindButton setLightColor={setVaccinationsLightColor} setNormalColor={setVaccinationsNormalColor} setDarkColor={setVaccinationsDarkColor} setLineColor={setVaccinationsLineColor}/>
                </div>
                <Graph graph={vaccinationsGraphKind} xAxis={vaccinationsGraphXAxis} yAxis={vaccinationsGraphYAxis} Label={vaccinationsGraphLabel} colors={vaccinationsGraphKind === "pie" ? pieColorAmount(vaccinationsLightColor, vaccinationsNormalColor, vaccinationsDarkColor, vaccinationsGraphYAxis) : lineAndBarColorAmount(vaccinationsNormalColor, vaccinationsGraphYAxis)} lineColor={vaccinationsLineColor}/>
            </div>

            {/*Mix*/}
            <div className="graphColumn">
                <div className="graphOptions">
                    <span className="span"></span>
                    <GraphSelector tabType={"Mix"} graphType={mixGraphType} setGraphType={setMixGraphType}/>
                    <ColorblindButton setLightColor={setMixLightColor} setNormalColor={setMixNormalColor} setDarkColor={setMixDarkColor} setLineColor={setMixLineColor}/>
                </div>
                <Graph graph={mixGraphKind} xAxis={mixGraphXAxis} yAxis={mixGraphYAxis} Label={mixGraphLabel} colors={mixGraphKind === "pie" ? pieColorAmount(mixLightColor, mixNormalColor, mixDarkColor, mixGraphYAxis) : lineAndBarColorAmount(mixNormalColor, mixGraphYAxis)} lineColor={mixLineColor}/>
            </div>
        </div>
    </div>
}
export default Content;