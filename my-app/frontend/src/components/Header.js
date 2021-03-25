import NavBar from './NavBar';
import './Header.css';
import SummaryTable from './SummaryTable';

function Header () {

    

    return <div className="header">
        <NavBar/>
        <div className="headerRow">
            <div className="headerContainer">
                <span className="headerText">{"simple data\nvisualization\n& analysis"}</span>
            </div>
            <SummaryTable/>
        </div>
        
    </div>
}
export default Header;