import { useEffect, useState } from 'react'
import axios from 'axios'
import authActions from '../redux/actions/authActions';
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'

const SignUp = (props) => {

  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const data = await axios.get('https://restcountries.com/v2/all?fields=name')
    setCountries(data.data)
  }, [])

  const [newUser, setNewUser] = useState({
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

  const responseGoogle = res => {
    let googleUser = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      country: 'Argentina',
      google: true
    }
    props.signUp(googleUser)
    
     
    // console.log(response)
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
          <input type="text" onChange={inputHandler} name="userImage" placeholder="URL profile image" />
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
        <GoogleLogin
            clientId="1088157262762-o76vtl98u7qkdvdbo2q2joeaslnft665.apps.googleusercontent.com"
            buttonText="Sign up with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            class="social-signin google"
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)