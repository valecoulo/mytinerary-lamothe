import { useEffect, useState } from 'react'
import axios from 'axios'
import authActions from '../redux/actions/authActions';
import { connect } from 'react-redux'

const SignUp = (props) => {

  const [ countries, setCountries ] = useState([]);

  useEffect( async ()  => {
    const data = await axios.get('https://restcountries.com/v2/all?fields=name')
    setCountries(data.data)
  }, [])

  const [ newUser, setNewUser ] = useState({
    userName: "",
    email: "",
    password: "",
    country: ""
  })
      
  const inputHandler = e => {
    console.log(e.target.value)
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = () => {
    props.signUp(newUser)
    console.log(newUser)
  }

        return (
         <div className="bg-form">
            <div id="login-box">
  <div class="left">
    <h1 className="signUp-title">Sign up</h1>
    
    <input type="text" onChange={inputHandler} name="userName" placeholder="Username" />
    <input type="text" onChange={inputHandler} name="email" placeholder="E-mail" />
    <input type="password" onChange={inputHandler} name="password" placeholder="Password" />
    <input type="password" onChange={inputHandler} name="password2" placeholder="Retype password" />
    <select name="country" onChange={inputHandler}>
     {countries.map(country => {
      return <option>{country.name}</option>
    })}
    </select>
    
    
    <input type="submit" name="signup_submit" onClick={submitForm} value="Sign me up" />
  </div>
  
  <div class="right">
    <span class="loginwith">Sign in with<br /></span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin google">Log in with Google+</button>
    <button class="social-signin twitter">Log in with Twitter</button>
  </div>
  <div class="or">OR</div>
</div>
         </div>
        )
}

const mapStateToProps = state => {
  return {
    name: state.authReducer.name
  }
}

const mapDispatchToProps = {
  signUp: authActions.signUp
}

export default connect (mapStateToProps, mapDispatchToProps) (SignUp)