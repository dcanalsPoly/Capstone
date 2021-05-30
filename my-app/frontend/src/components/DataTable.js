import './DataTable.css';
import Table from 'react-bootstrap/Table';
//import 'bootstrap/dist/css/bootstrap.min.css';

function DataTable (props) {

    return <Table className="tableText">
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </Table>

    // return <div className="graph" id="graphs">
    // <Line 
    //     data={data} 
    //     options={options}>
    // </Line>
    // </div>
    
}
export default DataTable;