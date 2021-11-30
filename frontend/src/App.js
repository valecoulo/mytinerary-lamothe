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
import SignIn from './pages/SignIn'
import SignUp from './pages/signUp'
import CityPage from './pages/CityPage'
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
        <ScrollToTop/>
        <NavBar/>
      <Routes>
        <Route path="/"  element={<Home />} exact />
        <Route path="/cities" element={<Cities />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/city/:id" element={<CityPage />} />

      </Routes>
        <Footer />

    </BrowserRouter>
  );
}

export default App;
