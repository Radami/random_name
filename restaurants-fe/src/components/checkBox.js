import React from 'react';


function CheckBox({name, text, isChecked, setChecked}) {

    const handleCheckboxChange = () => {
        setChecked(prevState => !prevState);
      };

    return (
        <div class="col form-check">
            <input class="form-check-input" type="checkbox" value="" id={name} checked={isChecked} onChange={handleCheckboxChange}/>  
            <label class="form-check-label" for={name}>
                {text}
            </label>
        </div>
    );
}

export default CheckBox;