import React from "react"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CarouselCities from "./components/CarouselCities";
import Footer from "./components/Footer"


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Home/>
    <CarouselCities />
    <Footer />
    </React.Fragment>
  );
}

export default App;
