import axios from "axios";
import { Component } from "react";

import { API_URL } from "../constants";

class Button extends Component {

    handleClick() {
        console.log('click')
    }

    render() {
        return <button onClick={this.props.onClick} className="new btn btn-warning rounded-pill">{this.props.name}</button>
    }
}

class Home extends Component {
    state ={
        name: null
    };

    componentDidMount() {
        this.getNewName();
      }

    getNewName = () => {
        axios.get(API_URL).then(res => this.setState({name: res.data.generated_name}))
    }

    render() {
        
        return (
                <main class="container-fluid d-flex flex-column col-lg-5 flex-grow-1 justify-content-center">
                    <div class="row flex-grow-1">
                        <div class="col d-flex flex-column justify-content-center text-center">
                            <div class="container-md py-3 rounded-pill bg-primary-subtle">
                                <h3>{this.state.name}</h3>
                            </div>
                            <div class="justify-content-center align-items-center m-3">
                                <div class="text-center">
                                    <Button name="Surprise me" onClick={this.getNewName}/>
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