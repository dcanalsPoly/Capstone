import './ColorblindButton.css';
import React, { useState } from 'react';
import './styling/customLabel.css';

function ColorblindButton(props) {
    
/* <button onClick={() => Colors.setTheme("Graphs")}></button> */

    const [colorblindType, setColorblindType] = useState("Default");
    console.log(colorblindType);

    return <div className="colorblind">
        <span className="label customH2Dark">Colorblindness: </span>
        <select className="dropButton customH2Dark" onChange={
            (e) => {
                    setColorblindType(e.target.value);
                    if (colorblindType === "Default")
                    {
                        props.setLightColor('#007965');
                        props.setNormalColor('#018383');
                        props.setDarkColor('#2d6187');
                        //
                        props.setLineColor('#75daad');
                    }
                    else if (colorblindType === "Deuteranopia")
                    {
                        props.setLightColor('#f9f871');
                        props.setNormalColor('#fddb3a');
                        props.setDarkColor('#fff600');
                        //
                        props.setLineColor('#28527a');
                    }
                    else if (colorblindType === "Tritanopia")
                    {
                        props.setLightColor('#e84545');
                        props.setNormalColor('#e40017');
                        props.setDarkColor('#91091e');
                        //
                        props.setLineColor('#28527a');
                    }
                }
            }>
            <option className="dropdownItems" value="Default">Default</option>
            <option className="dropdownItems" value="Deuteranopia">Deuteranopia</option>
            <option className="dropdownItems" value="Tritanopia">Tritanopia</option>
        </select>
    </div>
}
export default ColorblindButton;