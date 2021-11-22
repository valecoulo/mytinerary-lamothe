import React from "react"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Cities from './pages/Cities'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/"  element={<Home />} exact />
        <Route path="/cities" element={<Cities />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
