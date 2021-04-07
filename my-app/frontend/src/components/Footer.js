import './Footer.css';
import ReportForm from './ReportForm';
import './styling/customLabel.css';

//report form
//references
//contact us

function Footer () {
    return <div className="footer">

        <div className="reportContainer">
           <span className="customH1">
                Report an Error
           </span> 
           <span className={"customH2", "padding"}>
               <ReportForm/>
           </span>
        </div>

        <div className="referencesContactRow">
               <div className="referencesContactContainer" id="references">
                    <span className="customH1">
                         References
                    </span> 
                    <span className={"customH2", "padding"}>
                         We utilize APIs from the Health Department of Puerto Rico.
                    </span>
               </div>
           
               <div className="referencesContactContainer" id="contact">
                    <span className="customH1">
                         Contact us
                    </span> 
                    <span className={"customH2", "padding"}>
                         If you want to contact a developer of the page, here are their emails.
                    </span>
                    <span className={"customH2", "textPadding"}>
                         - Jose Lopez: lopez_72583@students.pupr.edu
                    </span>
                    <span className={"customH2", "textPadding"}>
                         - Elias Marrero: marrero_97850@students.pupr.edu
                    </span>
                    <span className={"customH2", "textPadding"}>
                         - Ernesto Feliciano: feliciano_96861@students.pupr.edu
                    </span>
                    <span className={"customH2", "textPadding"}>
                         - Diego Canals: canals_80877@students.pupr.edu
                    </span>
               </div>
        </div>

    </div>
}
export default Footer;

