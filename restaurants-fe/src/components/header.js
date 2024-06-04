import React, { Component } from "react";
import logo from '../assets/logo.png';

class Header extends Component {
    render() {
      return (
        <div class="container d-flex col-lg-5 mt-3 bg-light rounded-top">
          <nav class="navbar navbar-light w-100">
            <div class="container-fluid justify-content-center">
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