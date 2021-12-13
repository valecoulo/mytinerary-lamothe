import { useEffect, useState } from 'react';
import axios from 'axios';
import authActions from '../redux/actions/authActions';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';

const SignUp = (props) => {

useEffect(() => {
  console.log('props de sign up:', props);
}, [props])
  


  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const data = await axios.get('https://restcountries.com/v2/all?fields=name')
    setCountries(data.data)
  }, [])

  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
    country: "",
    userImage: ""
  })

  const [ errorInput, setErrorInput ] = useState({})

  const Alert = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
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
      userName: res.profileObj.name,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      country: 'Argentina',
      google: true
    }
    props.signUp(googleUser)
        .then((response) => response.data.success)
        .catch((error) => console.log(error))
  }



  const submitForm = () => {
    let info = Object.values(newUser).some(infoUser => infoUser === '')
    if(info) {
      Alert.fire({
        icon: 'error',
        title: 'There are fields incomplete, please complete them'
      })
    } else {
      props.signUp(newUser)
      .then(response => {
        if(response.data.success) {
          Alert.fire({
            icon: 'success',
            title: 'Your account has been created!'
          })
        } else if (response.data.errors) {
          setErrorInput({})
          response.data.errors.map(error => setErrorInput(messageError => {
            return {
              ...messageError,
              [error.path]: error.message
            }
          }))
        } else {
          Alert.fire({
            icon: 'error',
            title: 'That email has already been used! Try with another one'
          })
        }
      })
      .catch(error => {
        console.log(error)
        Alert.fire({
          icon: 'error',
          title: 'We are having technicas difficulties! Come back later!'
        })
      })
    }
  }

  return (
    <div className="bg-form">
      <div id="login-box">
        <div className='left-right'>
        <div class="left">
          <h1 className="signUp-title">Sign up</h1>

          <input type="text" onChange={inputHandler} name="userName" placeholder="Username" />
          <p>{errorInput.userName}</p>
          <input type="text" onChange={inputHandler} name="email" placeholder="E-mail" />
          <p>{errorInput.email}</p>
          <input type="url" onChange={inputHandler} name="userImage" placeholder="URL profile image" />
          <input type="password" onChange={inputHandler} name="password" placeholder="Password" />
          <p>{errorInput.password}</p>
          <select name="country" onChange={inputHandler}>
            {countries.map(country => {
              return <option>{country.name}</option>
            })}
          </select>


          <input type="submit" name="signup_submit" onClick={submitForm} value="Sign me up" />

            <h4 className="or-google">or</h4>

          <GoogleLogin
            clientId="1088157262762-o76vtl98u7qkdvdbo2q2joeaslnft665.apps.googleusercontent.com"
            buttonText="Sign up with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className= "google-button"
          />
        </div>

       
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {     
    userName: state.authReducer.userName     
  }     
}

const mapDispatchToProps = {
  signUp: authActions.signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)