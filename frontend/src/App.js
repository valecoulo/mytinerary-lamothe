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
import authActions from './redux/actions/authActions'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import { Navigate } from "react-router-dom";




function App(props) {

  console.log('app',props);

  useEffect(()=>{
    const { signInUserLS} = props
    if(localStorage.getItem('token')){
        signInUserLS(localStorage.getItem('token'))
        console.log(localStorage.getItem('token'))
    }
  },[])

  return (
    <BrowserRouter>
        <ScrollToTop/>
        <NavBar/>
      <Routes>
        <Route path="/"  element={<Home />} exact />
        <Route path="/cities" element={<Cities />} />
        <Route path="/signIn" element={<SignIn />}/>
        {!props.userName && (<Route path="/signUp" element={<SignUp/>}/>)}
        <Route path="*" element={<Navigate to="/"/>} />
        <Route path="/city/:id" element={<CityPage />} />
      </Routes>
        <Footer />

    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return{
      token: state.authReducer.token,
      userName: state.authReducer.userName
  }
}
const mapDispatchToProps = {
  signInUserLS: authActions.signInUserLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
