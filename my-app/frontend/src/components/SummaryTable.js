import SummaryTile from './SummaryTile';
import './SummaryTable.css';
import './styling/customLabel.css';

function SummaryTable(props) {
    return <div className="summaryTable">
        <span className="customH1">Totals Up To Last Week</span>
        <div className="summaryRow">
          <SummaryTile type='Cases' number={props.weeklyCasesSummary} showIcon='false'/>
          <SummaryTile type='Deaths' number={props.weeklydeathsSummary} showIcon='false'/>
          <SummaryTile type='Recovered' number={props.weeklyrecoveredSummary} showIcon='false'/>
        </div>
        <span className="customH1">Totals Up To Date</span>
        <div className="summaryRow">
          <SummaryTile type='Cases' number={props.casesSummary} showIcon='false'/>
          <SummaryTile type='Deaths' number={props.deathsSummary} showIcon='false'/>
          <SummaryTile type='Recovered' number={props.recoveredSummary} showIcon='false'/>
        </div>
    </div>
}
export default SummaryTable;