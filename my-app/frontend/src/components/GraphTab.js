import './GraphTab.css';
import React, { useState } from 'react';
import './styling/customLabel.css';

function GraphTab (props) {
    
    const [casesIndicator, setCasesIndicator] = useState("lineIndicator");
    const [deathsIndicator, setDeathsIndicator] = useState("invisibleIndicator");
    const [vaccinationsIndicator, setVaccinationsIndicator] = useState("invisibleIndicator");
    const [mixIndicator, setMixIndicator] = useState("invisibleIndicator");

    function showIndicator (indicator) {
        if (indicator === "Cases")
        {
            
            setCasesIndicator("lineIndicator");
            setDeathsIndicator("invisibleIndicator");
            setVaccinationsIndicator("invisibleIndicator");
            setMixIndicator("invisibleIndicator");
            props.setTabType("Cases");
        }
        else if (indicator === "Deaths") {
            
            setCasesIndicator("invisibleIndicator");
            setDeathsIndicator("lineIndicator");
            setVaccinationsIndicator("invisibleIndicator");
            setMixIndicator("invisibleIndicator");
            props.setTabType("Deaths");
        }
        else if (indicator === "Vaccinations") {
            
            setCasesIndicator("invisibleIndicator");
            setDeathsIndicator("invisibleIndicator");
            setVaccinationsIndicator("lineIndicator");
            setMixIndicator("invisibleIndicator");
            props.setTabType("Vaccinations");
        }
        else if (indicator === "Mix") {
            
            setCasesIndicator("invisibleIndicator");
            setDeathsIndicator("invisibleIndicator");
            setVaccinationsIndicator("invisibleIndicator");
            setMixIndicator("lineIndicator");
            props.setTabType("Mix");
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
            <span className="tabText" onClick={() => showIndicator("Vaccinations")}>Vaccinations</span>
            <hr className={vaccinationsIndicator}></hr>
        </div>
        <div className="tabColumn">
            <span className="tabText" onClick={() => showIndicator("Mix")}>Mix</span>
            <hr className={mixIndicator}></hr>
        </div>

    </div>
}
export default GraphTab;