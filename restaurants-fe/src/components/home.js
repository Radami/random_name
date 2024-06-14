import axios from "axios";
import React, { useEffect, useState } from 'react';
import { API_URL } from "../constants";
import Collapsible from "./collapsible";
import IconButton from "./iconButton";

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
        <main className="container-fluid d-flex flex-column col-md-6 flex-grow-1 justify-content-center">
            <div className="row flex-grow-1 justify-content-center">
                <div className="col d-flex flex-column justify-content-center ">
                    <div className="container-md py-3 rounded-pill bg-primary-subtle text-center">
                        <h3>{history[history.length-1]}</h3>
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
