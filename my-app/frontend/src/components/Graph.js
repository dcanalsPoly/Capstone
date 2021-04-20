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

            }, /*{
                label: '# of Deaths',
                data: [3, 15, 20, 7, 8, 1],
                fill: props.graph === "line" ? false : true,
                backgroundColor: [
                    props.darkColor,
                    props.lightColor,
                    props.normalColor,
                    props.darkColor,
                    props.lightColor,
                    props.normalColor,
                ],
                borderColor: props.graph === "bar" ? [] : [
                    props.lineColor,
                ],
                borderWidth: 2,

            },*/]
        };

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