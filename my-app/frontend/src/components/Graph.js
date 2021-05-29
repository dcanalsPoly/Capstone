import {Bar, Line, Pie} from 'react-chartjs-2';
import './Graph.css';

function Graph (props) {
    console.log(props.graph);

    var data = {
            labels: props.xAxis,
            datasets: [{
                label: props.Label,
                data: props.yAxis,
                fill: props.graph === "line" ? false : true,
                backgroundColor: props.colors,
                borderColor: props.graph === "line" ? [props.lineColor] : [],
                borderWidth: 2,

            }, 
        ]
    }

    // console.log("In Graph", props.myData)
    // function parsing(obj) {
    //     const dates = [];
    //     const vals = [];
    //     obj.forEach(e => dates.push(e.Date));
    //     obj.forEach(e => vals.push(e.Cases));

    //     return {
    //         x : dates,
    //         y : vals
    //     }
    // }

    // const myTable = parsing(props.myData);

    // var data = {
    //         // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         labels: myTable.x,
    //         datasets: [{
    //             label: '# of Cases',
    //             // data: [12, 19, 3, 5, 2, 3],
    //             data: myTable.y,
    //             // backgroundColor: [
    //             //     'rgba(255, 99, 132, 0.2)',
    //             //     'rgba(54, 162, 235, 0.2)',
    //             //     'rgba(255, 206, 86, 0.2)',
    //             //     'rgba(75, 192, 192, 0.2)',
    //             //     'rgba(153, 102, 255, 0.2)',
    //             //     'rgba(255, 159, 64, 0.2)'
    //             // ],
    //             // borderColor: [
    //             //     'rgba(255, 99, 132, 1)',
    //             //     'rgba(54, 162, 235, 1)',
    //             //     'rgba(255, 206, 86, 1)',
    //             //     'rgba(75, 192, 192, 1)',
    //             //     'rgba(153, 102, 255, 1)',
    //             //     'rgba(255, 159, 64, 1)'
    //             // ],
    //             borderWidth: 1,

    //         },*/]
    //     };

    var options = {
        gridLines: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        offsetGridLines: false,
                        gridLines: false
                    }
                }]
            }
        };


    if (props.graph === "line") {
        return <div className="graph" id="graphs">
        <Line 
            data={data} 
            options={options}>
        </Line>
        </div>
    
    } else if (props.graph === "bar"){
        return <div className="graph" id="graphs">
        <Bar 
            data={data} 
            options={options}>
        </Bar>
        </div>

    }
      else if (props.graph === "pie"){
        return <div className="graph" id="graphs">
        <Pie 
            data={data} 
            options={options}>
        </Pie>
        </div>
      }
      else {
        return <div className="graph" id="graphs">
        <Pie>
        </Pie>
        </div>
      }
    
}
export default Graph;