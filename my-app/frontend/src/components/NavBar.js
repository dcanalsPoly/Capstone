import './NavBar.css';
import './styling/customLabel.css';
import Menu from './Menu.js';

function NavBar() {
  return <div className="navBar">
    <div className="column">
      <span className="customH1">Covid-19</span>
      <span className="customH2">Data Visualization & Analysis</span>
    </div>
    <Menu/>
  </div>
}
export default NavBar;