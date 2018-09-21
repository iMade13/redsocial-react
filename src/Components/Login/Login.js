import React from 'react';
//import firebase from 'firebase';
import Logo from '../Global/Logo'
import SignIn from '../Login/SignIn'
import AuthFirebase from './AuthFirebase';

const Login = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-10 col-md-5 mx-auto">
                    <div className="col-12 center" id="logoIndex">
                        <Logo/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 mx-auto">
                    <div className="form-group mb-0">
                        <SignIn/>
                        <AuthFirebase/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;