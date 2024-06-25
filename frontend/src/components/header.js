import logo from '../assets/logo.png';

function Header () {
    return (
        <header>
          <div className="container d-flex col-lg-5 mt-3 ">
            <nav className="navbar navbar-light w-100">
              <div className="container-fluid justify-content-center text-white">
                  <img src={logo} alt="" width="30" height="28" className="d-inline-block align-text-top" />
                  <span className="fs-4">
                    So you said you needed a name
                  </span>
              </div>
            </nav>
          </div>
        </header>
    );
}

export default Header;
