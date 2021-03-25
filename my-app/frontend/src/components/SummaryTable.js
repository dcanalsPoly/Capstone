import SummaryTile from './SummaryTile';
import './SummaryTable.css';
import './styling/customLabel.css';

//create a map (like in Flutter) for the data (use dummy data) to be used in the tiles 

function SummaryTable(props) {
    return <div className="summaryTable">
        <span className="customH1">Total Monthly Summary</span>
        <div className="summaryRow">
          <SummaryTile type='Cases' number='10500' showIcon='false'/>
          <SummaryTile type='Deaths' number='45550' showIcon='false'/>
          <SummaryTile type='Vaccined' number='80000' showIcon='false'/>
        </div>
        <span className="customH1">Daily Summary</span>
        <div className="summaryRow">
          <SummaryTile type='Cases' number='1500' showIcon='true'/>
          <SummaryTile type='Deaths' number='4550' showIcon='true'/>
          <SummaryTile type='Vaccined' number='2000' showIcon='true'/>
        </div>
    </div>
}
export default SummaryTable;