import React from "react"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer"


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Home/>
    <Footer />
    </React.Fragment>
  );
}

export default App;
