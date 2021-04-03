import './ReportForm.css';
import React, { useState } from 'react';

function ReportForm  (props){
    const [clicked, setClicked] = useState(false);
    console.log(clicked);
    const [reportText, setReportText] = useState();
    console.log(reportText);
    const [errorType, setErrorType] = useState();
    console.log(errorType);

    /*function handleChange(event){
        setReportText = event.target.value;
    }*/
    
    var clickedSubmit = 'newError';
    var submitReport = 'submitButton';

    if (clicked === "Submit") 
    {
        return (
        <div>
            <label>Report submitted!</label>
            <span className={clickedSubmit} tabIndex='1' onClick={() => setClicked("Report")}>Report a new error</span>
        </div>
        )
    }

    else if (clicked === "Report" || clicked === false) 
    {
        return(
            <div className="containerReport">

                <label className= 'textTags'>Type of error:</label>
                <select className= "structure" placeholder="Choose an error" onChange={(e) => setErrorType(e.target.value)}>
                    <option value="Data">Data error</option>
                    <option value="Graph">Graph error</option>
                    <option value="Other">Other error</option>
                </select><br/>
    
                <label className= 'textTags'>Description:</label><br/>
                <input type='text' className='textAreaRep' placeholder="Give us some details..." onChange={(e) => setReportText(e.target.value)}></input><br/>
                <input type="submit" className={submitReport} tabIndex='1' onClick={() => setClicked("Submit")}></input>

            </div>
        );
    }

}
export default ReportForm;