import React from "react"



class SignIn extends React.Component {

    render() {

        return (
            <div className="bg-signin">
                <div id="login-box">
                    <div class="container-form-signin">
                        <h1 className="h1-signin">Sign in</h1>

                        <input type="text" name="email" placeholder="E-mail" />
                        <input type="password" name="password" placeholder="Password" />
                        
                        <input type="submit" name="signup_submit" value="Sign in" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn