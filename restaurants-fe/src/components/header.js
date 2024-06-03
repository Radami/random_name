import React, { Component } from "react";
import logo from '../assets/logo.png';

class Header extends Component {
    render() {
      return (
        <div class="container d-flex justify-content-center w-50">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                So you said you needed a name
              </a>
            </div>
          </nav>
        </div>
      );
    }
  }
  
  export default Header;