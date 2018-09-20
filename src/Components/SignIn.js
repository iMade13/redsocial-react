import React from 'react';
import '../css/login.css'

function SignIn() {
    return (
        <div className="row">
            <div className="col-12 col-md-5 mx-auto">
                <div class="form-group">
                    <input
                        id="txtEmail"
                        type="email"
                        placeholder="Email"
                        className="form-control pd"/>
                    <input
                        id="txtPassword"
                        type="password"
                        placeholder="Password"
                        className="form-control pd"/>
                    <div className="row">
                        <div className="col-6">
                            <button
                                type="submit"
                                id="btnLogin"
                                className="btn btn-primary inline full green-one">Log in</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary inline full green-one">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignIn;