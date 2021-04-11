import './ColorblindButton.css';
import React, { useState } from 'react';
import './styling/customLabel.css';
import { IoColorPaletteSharp } from 'react-icons/io5';

function ColorblindButton(props) {

    //green&blue default =  #007965, #018383, #2d6187,, #75daad
    //blue&yellow deuteronopia = #f9f871, #fddb3a, #fff600,, #28527a
    //red&blue tritanopia = #e84545, #e40017, #91091e,, #28527a

    function onClickDropItem (type) {
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

        return <div className="colorDiv">
            <IoColorPaletteSharp className="colorIcon"></IoColorPaletteSharp>
                <select className="tester" onChange={(e) => {onClickDropItem(e.target.value);}}>
                    <option value="Default" className="dropdownItems customH3">Default</option>
                    <option value="Deuteranopia" className="dropdownItems customH3">Deuteranopia</option>
                    <option value="Tritanopia" className="dropdownItems customH3">Tritanopia</option>
                </select>
        </div>
}
export default ColorblindButton;