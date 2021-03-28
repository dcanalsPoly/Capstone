import NavBar from './NavBar';
import './Header.css';
import SummaryTable from './SummaryTable';

function Header () {

    return <div className="header">
        <NavBar/>
        <div className="headerRow">
            <div className="headerContainer">
                <span className="headerText">{"simple data"}</span>
                <span className="headerText">{"visualization"}</span>
                <span className="headerText">{"& analysis"}</span>
            </div>
            <SummaryTable/>
        </div>
        
    </div>
}
export default Header;