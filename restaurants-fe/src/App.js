import { useEffect } from 'react';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  useEffect( () => {
  })

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
