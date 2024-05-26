import { Fragment } from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
