import { useEffect, useState } from 'react'
import axios from 'axios'

const SignUp = () => {

  const [ countries, setCountries ] = useState([]);

  useEffect( async () => {
    const data = await axios.get('https://restcountries.com/v2/all?fields=name')
    setCountries(data.data)
  }, [])
      
  console.log("counties pa", countries)

        return (
         <div className="bg-form">
            <div id="login-box">
  <div class="left">
    <h1 className="signUp-title">Sign up</h1>
    
    <input type="text" name="username" placeholder="Username" />
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password2" placeholder="Retype password" />
    <select>
     {countries.map(country => {
      return <option>{country.name}</option>
    })}
    </select>
    
    
    <input type="submit" name="signup_submit" value="Sign me up" />
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

export default SignUp