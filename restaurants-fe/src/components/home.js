import axios from "axios";
import React, { useEffect, useState } from 'react';
import { API_URL } from "../constants";
import Collapsible from "./collapsible";
import IconButton from "./iconButton";

export default function Home () {
  
    const [locations, setLocations] = useState([]);
    const [foods, setFoods] = useState([]);
    const [places, setPlaces] = useState([]);

    function getNewName () {
        axios.get(API_URL).then(res => {
            setLocations([...locations, res.data.location]);
            setFoods([...foods, res.data.food]);
            setPlaces([...places, res.data.place]);
        })
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
                    <div className="row m-3">
                        <div className="d-flex col justify-content-end px-0">
                            <IconButton buttonClass="btn btn-primary rounded-circle" iconClass="bi bi-skip-backward-fill" handleClick={onBack}/>
                        </div>
                        <div className="d-flex col justify-content-start px-3">
                            {/* <TextButton buttonText="Surprise me" buttonClass="btn btn-warning rounded-pill" handleClick={getNewName} />*/}
                            <IconButton buttonClass="btn btn-warning rounded-circle" iconClass="bi bi-arrow-clockwise" handleClick={getNewName} />                       
                        </div>
                        <Collapsible />
                    </div>
                </div>
            </div>
            <div className="row flex-grow-1"></div>
        </main>
    );
}
