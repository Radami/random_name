import React from 'react';
import { useCollapse } from 'react-collapsed';
import CheckBox from './checkBox';


function Collapsible({isLocationChecked, setLocationChecked, isFoodChecked, setFoodChecked, isPlaceChecked, setPlaceChecked}) {
    const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();

    return (
        <div className="container">
            <button {...getToggleProps()} className="btn btn-primary btn-sm">
                {isExpanded ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}
            </button>
            <div {...getCollapseProps()} className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">Generate New</h5>
                    <div className="card-text row">
                        <CheckBox text="Location" name="locationCheckbox" isChecked={isLocationChecked} setChecked={setLocationChecked}/>
                        <CheckBox text="Food" name="foodCheckbox" isChecked={isFoodChecked} setChecked={setFoodChecked}/>
                        <CheckBox text="Place" name="placeCheckbox" isChecked={isPlaceChecked} setChecked={setPlaceChecked}/>
                    </div>
                </div>      
            </div>
      </div>
    );
}

export default Collapsible