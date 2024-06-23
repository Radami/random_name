import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { API_URL } from "../constants";
import Collapsible from "./collapsible";
import IconButton from "./iconButton";

export default function Home () {

    // Used for history and to be able to fix each component of the name
    const [locations, setLocations] = useState([]);
    const [foods, setFoods] = useState([]);
    const [places, setPlaces] = useState([]);

    // Checkbox states
    const [newLocation, setNewLocation] = useState(true);
    const [newFood, setNewFood] = useState(true)
    const [newPlace, setNewPlace] = useState(true);

    const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();

    const checkBoxProps = {
        isLocationChecked: newLocation,
        setLocationChecked: setNewLocation,
        isFoodChecked: newFood,
        setFoodChecked: setNewFood,
        isPlaceChecked: newPlace,
        setPlaceChecked: setNewPlace,
        getToggleProps: getToggleProps,
        getCollapseProps: getCollapseProps,
        isExpanded: isExpanded
    }

    function getNewName () {

        let params = {
            location: newLocation ? null: locations[locations.length - 1],
            food: newFood ? null : foods[foods.length - 1],
            place: newPlace ? null : places[places.length - 1],
        }
        
        if (params.location == null || params.food == null || params.place == null) {
            axios.get(API_URL, {params: params}).then(res => {
                setLocations([...locations, res.data.location]);
                setFoods([...foods, res.data.food]);
                setPlaces([...places, res.data.place]);
            })
        }
    }

    function onBack() {
        if (locations.length > 1 && foods.length > 1 && places.length > 1) {
            setLocations(locations.slice(0, locations.length-1));
            setFoods(foods.slice(0, foods.length-1));
            setPlaces(places.slice(0, places.length-1));
        }
    }

    useEffect(() => {
        getNewName();
    }, []);

    useEffect(() => {
        console.log(locations);
        console.log(foods);
        console.log(places);
    }, [locations, foods, places]);


    return (
        <main className="container-fluid d-flex flex-column col-md-6 flex-grow-1 justify-content-center">
            <div className="row flex-grow-1 justify-content-center">
                <div className="col d-flex flex-column justify-content-center ">
                    <div className="container-md py-3 rounded-pill bg-primary-subtle text-center">
                        <h3>{locations[locations.length-1]} {foods[foods.length-1]} {places[places.length-1]}</h3>
                    </div>
                    <div className="row mt-3">
                        <div className="d-flex col align-items-end">
                        <div className="container">
                            <button {...getToggleProps()} className="btn btn-primary btn-sm">
                            {isExpanded ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}
                            </button>
                        </div>
                        </div>
                        <div className="d-flex col justify-content-center px-0">
                            <IconButton buttonClass="btn btn-lg btn-primary rounded-circle me-2" iconClass="bi bi-skip-backward-fill" handleClick={onBack}/>
                            <IconButton buttonClass="btn btn-warning rounded-circle fs-4 ms-2" iconClass="bi bi-arrow-clockwise" handleClick={getNewName} />                       
                        </div>
                        <div className="d-flex col justify-content-start px-3">
                           
                        </div>
                        <Collapsible {...checkBoxProps}/>
                    </div>
                </div>
            </div>
            <div className="row flex-grow-1"></div>
        </main>
    );
}
