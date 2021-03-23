//the title for the Total Monthly Summary & Daily Summary
//and the Summary Tiles
//
//create a map (like in Flutter) for the data (use dummy data) to be used in the tiles 

function SummaryTable(props) {
    return <div>
        <SummaryTile type='Cases' number='1500'/>
      <SummaryTile type='Deaths' number='4550'/>
    </div>
}
export default SummaryTable;

