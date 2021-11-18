import React from "react"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CarouselCities from "./components/CarouselCities";


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Home/>
    <CarouselCities />
    </React.Fragment>
  );
}

export default App;
