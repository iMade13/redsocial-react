import React from 'react';
import Logo from './Global/Logo'
import SignIn from './SignIn'

function Login() {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-10 col-md-5 mx-auto">
                    <div className="col-12 center" id="logoIndex">
                        <Logo/>
                    </div>
                </div>
            </div>
            <div>
                <SignIn/>
            </div>
        </div>
    )
}

export default Login;
