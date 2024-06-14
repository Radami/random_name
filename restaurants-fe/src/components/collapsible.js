import React from 'react';
import { useCollapse } from 'react-collapsed';
import CheckBox from './checkBox';


function Collapsible() {
    const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();

    return (
        <div className="container">
            
            <button {...getToggleProps()} className="btn btn-primary btn-sm">
                {isExpanded ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}
            </button>
            <div {...getCollapseProps()} className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">Advanced Options</h5>
                    <div className="card-text row">
                        <CheckBox text="Location" name="locationCheckbox"/>
                        <CheckBox text="Food type" name="foodCheckbox"/>
                        <CheckBox text="Establishment" name="establishmentCheckbox"/>
                    </div>
                </div>      
            </div>
      </div>
    );
}

export default Collapsible