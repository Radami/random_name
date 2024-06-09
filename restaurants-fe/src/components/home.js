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

export default function Home () {
  
    const [history, setHistory] = useState([]);

    function getNewName () {
        axios.get(API_URL).then(res => {
            setHistory([...history, res.data.generated_name]);
        })
    }

    function onBack() {
        if (history.length > 1) {
            setHistory(history.slice(0, history.length-1));
        }
    }

    useEffect(() => {
        getNewName();
    }, []);

    useEffect(() => {
        console.log(history);
    }, [history]);


    return (
        <main class="container-fluid d-flex flex-column col-md-6 flex-grow-1 justify-content-center">
            <div class="row flex-grow-1 justify-content-center">
                <div class="col d-flex flex-column justify-content-center ">
                    <div class="container-md py-3 rounded-pill bg-primary-subtle text-center">
                        <h3>{history[history.length-1]}</h3>
                    </div>
                    <div class="row m-3">
                        <div class="d-flex col justify-content-end px-0">
                            <IconButton buttonClass="btn btn-primary rounded-circle" iconClass="bi bi-skip-backward-fill" handleClick={onBack}/>
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
