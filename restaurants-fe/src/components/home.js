import axios from "axios";
import { Component } from "react";

import { API_URL } from "../constants";

class Button extends Component {

    handleClick() {
        console.log('click')
    }

    render() {
        return <button onClick={this.props.onClick} className="new btn btn-primary rounded-pill">{this.props.name}</button>
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
            <div class="d-flex flex-column min-vh-100">
                <div class="container-fluid w-50 d-flex flex-column flex-grow-1 justify-content-center">
                    <div class="row flex-grow-1">
                        <div class="col d-flex flex-column justify-content-end text-center mt-auto mb-auto">
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
                </div>
            </div>
            
        )
    }
}

export default Home;