import './Content.css';
import Graph from './Graph';
import ColorblindButton from './ColorblindButton';
import GraphSelector from './GraphSelector';
import GraphTab from './GraphTab';
import React, { useState, useEffect } from 'react';
import CountryDataTable from './CountryDataTable';

function Content(props) {
    //
    //Country Selection
    //
    
    //var countries = ["portugal", "south-africa", "denmark", "thailand", "uruguay", "argentina", "philippines", "bahamas", "jamaica", "taiwan", "greece", "cuba", "panama", "egypt", "norway", "dominican-republic", "guatemala", "south-korea", "venezuela", "israel"];
    
    //
    //Data Recollection
    //
    const [countryData, setCountryData] = useState(false);  
    const [country, setCountry] = useState("argentina");
    const [fromDate, setFromDate] = useState(8);
    const [counter, setCounter] = useState(0);

    console.log('countryData: ', countryData);   
     
    //Date definitions
    var toDate = new Date();
    toDate.setDate(toDate.getDate() - 1);

    //Data Fetching Function
    const dataFetch = async (value) => {

        if (["8", "16", "31"].includes(value)) {
            console.log("In If")
            var x = new Date();
            x.setDate(x.getDate() - value);
            var y = country;
        }

        else if (typeof value == "string") {
            var x = fromDate;
            var y = value;
        }


        await fetch('https://api.covid19api.com/live/country/' + y + '/status/confirmed?from='+ x +'&to='+ toDate + '')
            .then(response => response.json())
            .then(data => 
                {   
                    const obj = {
                        active: [],
                        confirmed: [],
                        deaths: [],
                        recovered: [],
                        dates: [],
                        name: '',
                    };
                    data.forEach(e => {
                        obj.active.push(e.Active);
                        obj.confirmed.push(e.Confirmed);
                        obj.deaths.push(e.Deaths);
                        obj.recovered.push(e.Recovered);
                        obj.dates.push(e.Date.slice(0, 10) + '\n');
                        obj.name = e.Country;
                        }
                    );
                    //
                    props.setCasesSummary(obj.active[6]);
                    props.setDeathsSummary(obj.deaths[6]);
                    props.setRecoveredSummary(obj.recovered[6]);
                    props.setWeeklyCasesSummary(obj.active[0]);
                    props.setWeeklyDeathsSummary(obj.deaths[0]);
                    props.setWeeklyRecoveredSummary(obj.recovered[0]);
                    props.setCountryTitleSummary(obj.name);

                    setCountryData(obj);
                    setCountry(y);
                    setFromDate(x)
                });
    };
    useEffect(() => {
        if (counter == 0)
            dataFetch("8");
            setCounter(1);
    }, []);

    //
    //Graph dropdown
    //
    const [casesGraphType, setCasesGraphType] = useState("casesLine");
    const [deathsGraphType, setDeathsGraphType] = useState("deathsBar");
    const [recoveredGraphType, setRecoveredGraphType] = useState("recoveredBar");
    const [activeGraphType, setActiveGraphType] = useState("activeLine");

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


    if (casesGraphType === "casesLine")
    {
        casesGraphKind = "line";
        casesGraphXAxis = countryData.dates;
        casesGraphYAxis = countryData.confirmed;
        casesGraphLabel = 'Confirmed Cases';
    }
    else if (casesGraphType === "casesBar")
    {
        casesGraphKind = "bar";
        casesGraphXAxis = countryData.dates;
        casesGraphYAxis = countryData.confirmed;
        casesGraphLabel = 'Confirmed Cases';
    }
   
    //
    if (deathsGraphType === "deathsLine")
    {
        deathsGraphKind = "line";
        deathsGraphXAxis = countryData.dates;
        deathsGraphYAxis = countryData.deaths;
        deathsGraphLabel = "Number of Deaths";
    }
    else if (deathsGraphType === "deathsBar")
    {
        deathsGraphKind = "bar";
        deathsGraphXAxis = countryData.dates;
        deathsGraphYAxis = countryData.deaths;
        deathsGraphLabel = "Number of Deaths";
    }
    
    //
    if (recoveredGraphType === "recoveredLine")
    {
        recoveredGraphKind = "line";
        recoveredGraphXAxis = countryData.dates;
        recoveredGraphYAxis = countryData.recovered;
        recoveredGraphLabel = "Recovered Cases";
    }
    else if (recoveredGraphType === "recoveredBar")
    {
        recoveredGraphKind = "bar";
        recoveredGraphXAxis = countryData.dates;
        recoveredGraphYAxis = countryData.recovered;
        recoveredGraphLabel = "Recovered Cases";
    }
    
    //
    if (activeGraphType === "activeLine")
    {
        activeGraphKind = "line";
        activeGraphXAxis = countryData.dates;
        activeGraphYAxis = countryData.active;
        activeGraphLabel = "Active Cases";
    }
    else if (activeGraphType === "activeBar")
    {
        activeGraphKind = "bar";
        activeGraphXAxis = countryData.dates;
        activeGraphYAxis = countryData.active;
        activeGraphLabel = "Active Cases";
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

    function barColorAmount (lightColor, normalColor, darkColor, graphYAxis) {
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

    function lineColorAmount (normalColor, graphYAxis) {
        var colors = [];
        for (var i = 0; i < graphYAxis.length; i++)
        {
            colors[i] = normalColor;
        }
        //
        return colors;
    } 

    if (!countryData) {
        return <div>Waiting...</div>
    }
    else if (countryData)
    {
        return <div className="content">
            <div className="contentRow">
                <div className="customH1Green">Select Country:</div>
                <div className="spacer"></div>
                <div className="dropDiv">
                    <select className= "contentDropButton" onChange={(e) => {
                            console.log('e.target.value', e.target.value);
                            dataFetch(e.target.value);
                        }}>
                        <option value="argentina">Argentina</option>
                        <option value="bahamas">Bahamas</option>
                        <option value="cuba">Cuba</option>
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
                <div className="spacer"></div>
                <div className="customH1Green">Date Range:</div>
                <div className="spacer"></div>
                <div className="dropDiv">
                    <select className= "contentDropButton" onChange={(e) => {
                            console.log('e.target.value', e.target.value, typeof(e.target.value));
                            dataFetch(e.target.value);
                        }}>
                        <option value={8}>7 Days</option>
                        <option value={16}>15 Days</option>
                        <option value={31}>30 Days</option>
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
                    <Graph graph={casesGraphKind} xAxis={casesGraphXAxis} yAxis={casesGraphYAxis} Label={casesGraphLabel} colors={casesGraphKind === "bar" ? barColorAmount(casesLightColor, casesNormalColor, casesDarkColor, casesGraphYAxis) : lineColorAmount(casesNormalColor, casesGraphYAxis)} lineColor={casesLineColor}/>
                </div>
                
                {/*Deaths*/}
                <div className="graphColumn">
                    <div className="graphOptions">
                        <span className="span"></span>
                        <GraphSelector tabType={"Deaths"} graphType={deathsGraphType} setGraphType={setDeathsGraphType}/>
                        <ColorblindButton setLightColor={setDeathsLightColor} setNormalColor={setDeathsNormalColor} setDarkColor={setDeathsDarkColor} setLineColor={setDeathsLineColor}/>
                    </div>
                    <Graph graph={deathsGraphKind} xAxis={deathsGraphXAxis} yAxis={deathsGraphYAxis} Label={deathsGraphLabel} colors={deathsGraphKind === "bar" ? barColorAmount(deathsLightColor, deathsNormalColor, deathsDarkColor, deathsGraphYAxis) : lineColorAmount(deathsNormalColor, deathsGraphYAxis)} lineColor={deathsLineColor}/>
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
                <Graph graph={recoveredGraphKind} xAxis={recoveredGraphXAxis} yAxis={recoveredGraphYAxis} Label={recoveredGraphLabel} colors={recoveredGraphKind === "bar" ? barColorAmount(recoveredLightColor, recoveredNormalColor, recoveredDarkColor, recoveredGraphYAxis) : lineColorAmount(recoveredNormalColor, recoveredGraphYAxis)} lineColor={recoveredLineColor}/>
            </div>

            {/*Active*/}
            <div className="graphColumn">
                <div className="graphOptions">
                    <span className="span"></span>
                    <GraphSelector tabType={"Active"} graphType={activeGraphType} setGraphType={setActiveGraphType}/>
                    <ColorblindButton setLightColor={setActiveLightColor} setNormalColor={setActiveNormalColor} setDarkColor={setActiveDarkColor} setLineColor={setActiveLineColor}/>
                </div>
                <Graph graph={activeGraphKind} xAxis={activeGraphXAxis} yAxis={activeGraphYAxis} Label={activeGraphLabel} colors={activeGraphKind === "bar" ? barColorAmount(activeLightColor, activeNormalColor, activeDarkColor, activeGraphYAxis) : lineColorAmount(activeNormalColor, activeGraphYAxis)} lineColor={activeLineColor}/>
            </div>
        </div>
        
            <CountryDataTable/>
        </div>
    }

}
export default Content;