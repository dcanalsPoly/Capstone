import './SummaryTile.css';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
//npm install react-icons --save

function SummaryTile(props) {

    //change this to work within a function that checks the past statistic 
    //and then choose if it went up (IoIosArrowUp), down (IoIosArrowDown) or didn't change (none)
    //
    //for the Total Month Summary turn the opacity of the arrow icon off 
    var arrowIcon = IoIosArrowDown; 
    
    function roundUp(number) {
        if (number >= 1000)
            return (number/1000) + "k";
        else 
            return number;
    }
    
    return <div>
        <div className="tileRow">
            <IoIosArrowDown className="icon"></IoIosArrowDown>
            <div className="container">
                <span className="text">{roundUp(props.number)}</span>
            </div>
            <span className="text">{props.type}</span>
        </div>
    </div>
}
export default SummaryTile;