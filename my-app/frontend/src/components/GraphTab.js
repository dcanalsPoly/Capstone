import './GraphTab.css';
import React, { useState } from 'react';
import './styling/customLabel.css';

function GraphTab (props) {
    
    const [casesIndicator, setCasesIndicator] = useState("lineIndicator");
    const [deathsIndicator, setDeathsIndicator] = useState("invisibleIndicator");
    const [recoveredIndicator, setRecoveredIndicator] = useState("invisibleIndicator");
    const [activeIndicator, setActiveIndicator] = useState("invisibleIndicator");

    function showIndicator (indicator) {
        if (indicator === "Cases")
        {
            
            setCasesIndicator("lineIndicator");
            setDeathsIndicator("invisibleIndicator");
            setRecoveredIndicator("invisibleIndicator");
            setActiveIndicator("invisibleIndicator");
            props.setTabType("Cases");
        }
        else if (indicator === "Deaths") {
            
            setCasesIndicator("invisibleIndicator");
            setDeathsIndicator("lineIndicator");
            setRecoveredIndicator("invisibleIndicator");
            setActiveIndicator("invisibleIndicator");
            props.setTabType("Deaths");
        }
        else if (indicator === "Recovered") {
            
            setCasesIndicator("invisibleIndicator");
            setDeathsIndicator("invisibleIndicator");
            setRecoveredIndicator("lineIndicator");
            setActiveIndicator("invisibleIndicator");
            props.setTabType("Recovered");
        }
        else if (indicator === "Active") {
            
            setCasesIndicator("invisibleIndicator");
            setDeathsIndicator("invisibleIndicator");
            setRecoveredIndicator("invisibleIndicator");
            setActiveIndicator("lineIndicator");
            props.setTabType("Active");
        }
    }

    return <div className="tabContainer">
        <div className="tabColumn">
            <span className="tabText" onClick={() => showIndicator("Cases")}>Cases</span>
            <hr className={casesIndicator}></hr>
        </div>
        <div className="tabColumn">
            <span className="tabText" onClick={() => showIndicator("Deaths")}>Deaths</span>
            <hr className={deathsIndicator}></hr>
        </div>
        <div className="tabColumn">
            <span className="tabText" onClick={() => showIndicator("Recovered")}>Recovered</span>
            <hr className={recoveredIndicator}></hr>
        </div>
        <div className="tabColumn">
            <span className="tabText" onClick={() => showIndicator("Active")}>Active</span>
            <hr className={activeIndicator}></hr>
        </div>

    </div>
}
export default GraphTab;