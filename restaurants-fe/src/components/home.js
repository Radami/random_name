import axios from "axios";
import { Component } from "react";

import { API_URL } from "../constants";

function Button({value, handleClick}) {
    return (
        <button onClick={handleClick} className="new btn btn-warning rounded-pill">
            {value}
        </button>
    );
}

class Home extends Component {
    state ={
        name: null,
    };

    componentDidMount() {
        this.getNewName();
      }

    getNewName = () => {
        axios.get(API_URL).then(res => this.setState({name: res.data.generated_name}))
    }

    render() {
        
        return (
                <main class="container-fluid d-flex flex-column col-md-6 flex-grow-1 justify-content-center">
                    <div class="row flex-grow-1 justify-content-center">
                        <div class="col d-flex flex-column justify-content-center text-center">
                            <div class="container-md py-3 rounded-pill bg-primary-subtle">
                                <h3>{this.state.name}</h3>
                            </div>
                            <div class="justify-content-center align-items-center m-3">
                                <div class="text-center">
                                    <Button value="Surprise me" handleClick={this.getNewName}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-grow-1"></div>
                </main>
           
        )
    }
}

export default Home;