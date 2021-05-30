import './SummaryTile.css';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import './styling/customLabel.css';
//npm install react-icons --save

function SummaryTile(props) {
    
    var arrowIcon = IoIosArrowDown; 
    
    function roundUp(number) {
        if (number >= 1000000)
            return (number/1000000).toFixed(1) + "m";
        else if (number >= 1000)
            return (number/1000).toFixed(1) + "k";
        else 
            return number;
    }

    var iconStyle;
    if (props.showIcon === 'true')
        iconStyle = "icon";
    else 
        iconStyle = "invisibleIcon";

    return <div>
        <div className="tileRow">
            <IoIosArrowDown className={iconStyle}></IoIosArrowDown>
            <div className="container">
                <span className="customH3">{roundUp(props.number)}</span>
            </div>
            <span className="customH3">{props.type}</span>
        </div>
    </div>
}
export default SummaryTile;