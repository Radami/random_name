import React, { useState } from 'react';


function CheckBox({name, text}) {
    
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
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