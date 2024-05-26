import axios from "axios";
import { Component } from "react";

import { API_URL } from "../constants";

class Button extends Component {

    handleClick() {
        console.log('click')
    }

    render() {
        return <button onClick={this.props.onClick} className="new">{this.props.name}</button>
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
            <div class="container">
                <div class="col-6 bg-primary-subtle justify-content-center">
                    <div class="row">
                        <h3>{this.state.name}</h3>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="text-center">
                            <Button name="New" onClick={this.getNewName}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;