import React from 'react';


function CheckBox({name, text, isChecked, setChecked}) {

    const handleCheckboxChange = () => {
        setChecked(prevState => !prevState);
      };

    return (
        <div className="col form-check">
            <input className="form-check-input" type="checkbox" value="" id={name} checked={isChecked} onChange={handleCheckboxChange}/>  
            <label className="form-check-label" htmlFor={name}>
                {text}
            </label>
        </div>
    );
}

export default CheckBox;