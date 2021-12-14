import React, { useEffect } from "react"
import { useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import Swal from 'sweetalert2';
import GoogleLogin from 'react-google-login'
import {Link} from 'react-router-dom'


const SignIn = (props) => {

useEffect(() => {
    console.log("nameprops:",props)
}, [props])


    const [signUser, setSignUser] = useState ({
        email: "", 
        password: "",
    })

    const [ errorInput, setErrorInput ] = useState(null)

    const inputHandler = (e) => {
        setSignUser({
            ...signUser, 
            [e.target.name]: e.target.value
        })
    }

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

    const submitForm = () => {
        let info = Object.values(signUser).some(infoUser => infoUser === "")
        if(info) {
            Alert.fire({
                icon: 'error',
                title: 'There are fields incomplete, please complete them'
            })
        } else {
            props.signIn(signUser)
            .then(response => {
                if(!response.data.success) {
                     Alert.fire({
                     icon: 'error',
                     title: 'Email and/or password incorrect'
                   })
                } else {
                    Alert.fire({
                        icon: 'success',
                        title: 'Welcome back!'
                    })
                }
            })
            .catch(error => Alert.fire({
                icon: 'error',
                title: 'Email and/or password incorrect'
            }))
        }
    }

    const responseGoogle = (res) => {
        let googleUser = {
            email: res.profileObj.email, 
            password: res.profileObj.googleId,
            userImage: res.profileObj.imageUrl,
            google: true,
        }
        props.signIn(googleUser)
        .then((response) => {
            if (response.data.success){
                Alert.fire({
                    icon: 'success',
                     title: 'Welcome back!'
                  })
            }
            else{
            setErrorInput(response.data.error)
            }
        })
        .catch((error) => {
            console.log(error)
            Alert.fire({
                icon: 'error',
                title: 'You have to sign up before you log in!'
              })
        })
    }




        return (
            <>
            {/* <h1 className="text-light">Welcome {props.userName}</h1> */}
            <div className="bg-signin">
                <div id="login-boxsigin">
                    <div class="container-form-signin">
                        <h1 className="h1-signin">Sign in </h1>

                        <input onChange={inputHandler} type="text" name="email" placeholder="E-mail" />
                        <input onChange={inputHandler} type="password" name="password" placeholder="Password" />
                        <input type="submit" onClick={submitForm} name="signup_submit" value="Sign in" />
                        <GoogleLogin
            clientId="1088157262762-o76vtl98u7qkdvdbo2q2joeaslnft665.apps.googleusercontent.com"
            buttonText="Sign up with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className= "google-button"
          />
          <p>You dont have an account?<Link to="/signUp">Sign Up here!</Link></p>
                    </div>
                </div>
            </div>
            </>
        )
    }

const mapStateToProps = state => {
    return {
        userName: state.authReducer.userName,
        email: state.authReducer.email,
        userImage: state.authReducer.userImage
    }
}

const mapDispatchToProps = {
    signIn: authActions.signIn
}

export default connect (mapStateToProps, mapDispatchToProps) (SignIn)