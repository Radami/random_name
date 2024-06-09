import axios from "axios";
import React, { useEffect, useState } from 'react';

import { API_URL } from "../constants";

function TextButton({handleClick, buttonText, buttonClass}) {
    return (
        <button onClick={handleClick} className={buttonClass}>
            {buttonText}
        </button>
    );
}

function IconButton({handleClick, buttonClass, iconClass}) {
    return (
        <button onClick={handleClick} class={buttonClass}>
            <i class={iconClass} ></i>
        </button>
    );
}



function Home () {
  
    const [name, setName] = useState("")

    function getNewName () {
        axios.get(API_URL).then(res => setName(res.data.generated_name))
    }

    useEffect(() => {
        getNewName();
    }, []);

    return (
        <main class="container-fluid d-flex flex-column col-md-6 flex-grow-1 justify-content-center">
            <div class="row flex-grow-1 justify-content-center">
                <div class="col d-flex flex-column justify-content-center ">
                    <div class="container-md py-3 rounded-pill bg-primary-subtle text-center">
                        <h3>{name}</h3>
                    </div>
                    <div class="row m-3">
                        <div class="d-flex col justify-content-end px-0">
                            <IconButton buttonClass="btn btn-primary rounded-circle" iconClass="bi bi-skip-backward-fill" />
                        </div>
                        <div class="d-flex col justify-content-start px-3">
                            {/* <TextButton buttonText="Surprise me" buttonClass="btn btn-warning rounded-pill" handleClick={getNewName} />*/}
                            <IconButton buttonClass="btn btn-warning rounded-circle" iconClass="bi bi-arrow-clockwise" handleClick={getNewName} />                       
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row flex-grow-1"></div>
        </main>
    );
}


export default Home;