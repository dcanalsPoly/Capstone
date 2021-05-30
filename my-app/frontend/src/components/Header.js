import NavBar from './NavBar';
import './Header.css';
import SummaryTable from './SummaryTable';

function Header(props) {

    console.log("In header")
    return <div className="header">
        <NavBar/>
        <div className="headerRow">
            <div className="headerContainer">
                <span className="headerText">simple data</span>
                <span className="headerText">visualization</span>
                <span className="headerText">& analysis</span>
            </div>
            <SummaryTable casesSummary={props.casesSummary} deathsSummary={props.deathsSummary} recoveredSummary={props.recoveredSummary}/>
        </div>
        
    </div>
}
export default Header;