import NavBar from './NavBar';
import './Header.css';
import SummaryTable from './SummaryTable';

function Header(props) {

    console.log("In header")
    return <div className="header">
        <NavBar/>
        <div className="headerRow">
            <div className="headerContainer">
                <span className="headerText">Viewing Data For {props.countryTitleSummary}</span>
                <span className="headerText"></span>
            </div>
            <SummaryTable casesSummary={props.casesSummary} deathsSummary={props.deathsSummary} recoveredSummary={props.recoveredSummary} weeklyCasesSummary={props.weeklyCasesSummary} weeklydeathsSummary={props.weeklydeathsSummary} weeklyrecoveredSummary={props.weeklyrecoveredSummary}/>
        </div>
        
    </div>
}
export default Header;