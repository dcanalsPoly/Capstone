import SummaryTile from './SummaryTile';
import './SummaryTable.css';
import './styling/customLabel.css';

function SummaryTable(props) {
    return <div className="summaryTable">
        <span className="customH1">Total Monthly Summary</span>
        <div className="summaryRow">
          <SummaryTile type='Cases' number={props.casesSummary * 4} showIcon='false'/>
          <SummaryTile type='Deaths' number={props.deathsSummary * 4} showIcon='false'/>
          <SummaryTile type='Recovered' number={props.recoveredSummary * 4} showIcon='false'/>
        </div>
        <span className="customH1">Daily Summary</span>
        <div className="summaryRow">
          <SummaryTile type='Cases' number={props.casesSummary} showIcon='false'/>
          <SummaryTile type='Deaths' number={props.deathsSummary} showIcon='false'/>
          <SummaryTile type='Recovered' number={props.recoveredSummary} showIcon='false'/>
        </div>
    </div>
}
export default SummaryTable;