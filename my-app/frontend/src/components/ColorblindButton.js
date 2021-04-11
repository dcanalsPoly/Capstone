import './ColorblindButton.css';
import React, { useState } from 'react';
import './styling/customLabel.css';
import { IoColorPaletteSharp } from 'react-icons/io5';

function ColorblindButton(props) {
    
/* <button onClick={() => Colors.setTheme("Graphs")}></button> */

    const [colorblindType, setColorblindType] = useState("Default");
    console.log(colorblindType);

    const [showDropdown, setShowDropdown] = useState("false");

    //do fucntion that when you tap the dropdown item, sets value of colorblindType, 
    //and triggers the showDropdown to the contrary
    function onClickDropItem (type) {
        showDropdown === "false" ? setShowDropdown("true") : setShowDropdown("false");
        if (type === "Default")
        {
            props.setLightColor('#007965');
            props.setNormalColor('#018383');
            props.setDarkColor('#2d6187');
            //
            props.setLineColor('#75daad');
        }
        else if (type === "Deuteranopia")
        {
            props.setLightColor('#f9f871');
            props.setNormalColor('#fddb3a');
            props.setDarkColor('#fff600');
            //
            props.setLineColor('#28527a');
        }
        else if (type === "Tritanopia")
        {
            props.setLightColor('#e84545');
            props.setNormalColor('#e40017');
            props.setDarkColor('#91091e');
            //
            props.setLineColor('#28527a');
        }

    }

    if (showDropdown === "false")
        return <div className="dropdownButton">
            <span onClick={() => showDropdown === "false" ? setShowDropdown("true") : setShowDropdown("false")}>
                <IoColorPaletteSharp className="dropIcon"></IoColorPaletteSharp>
            </span>
        </div>
    else {
        return <div className="dropdownColumn">
            <div className="dropdownButton">
                <span onClick={() => showDropdown === "false" ? setShowDropdown("true") : setShowDropdown("false")}>
                    <IoColorPaletteSharp className="dropIcon"></IoColorPaletteSharp>
                </span>
            </div>
            
            <div className="dropdownItemsContainer">
                <span className="dropdownItems customH3" onClick={() => onClickDropItem("Default")}>
                Default
                </span>
                <span className="dropdownItems customH3" onClick={() => onClickDropItem("Deuteranopia")}>
                Deuteranopia
                </span>
                <span className="dropdownItems customH3" onClick={() => onClickDropItem("Tritanopia")}>
                Tritanopia
                </span>
            </div>
            
        </div>
    }
}
export default ColorblindButton;