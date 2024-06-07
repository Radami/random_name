import React, { Component } from "react";
import logo from '../assets/logo.png';

class Header extends Component {
    render() {
      return (
        <header>
          <div class="container d-flex col-lg-5 mt-3 ">
            <nav class="navbar navbar-light w-100">
              <div class="container-fluid justify-content-center text-white">
                
                  <img src={logo} alt="" width="30" height="28" class="d-inline-block align-text-top" />
                  <span class="fs-4">
                    So you said you needed a name
                  </span>
                
              </div>
            </nav>
          </div>
        </header>
      );
    }
  }
  
  export default Header;