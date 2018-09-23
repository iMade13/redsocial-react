import React from 'react';
import Logo from '../Global/Logo'
import '../../css/login.css'

//..............................................creacion de componente de funcion sin estado 
const Login = ({onAuthRegister,onAuthFacebook,onAuthGoogle } ) => {
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

                        <section>
                            <input
                             type="email"
                            placeholder="Email" className="form-control pd"/>
                            <input
                            type="password"
                            placeholder="Password"  className="form-control pd"/>
                            <div className="row">
                                <div className="col-6">
                                    <button type="submit"
                                        className="btn btn-primary inline full green-one">Log in </button>
                                </div>
                                <div className="col-6">
                                    <button onClick={ onAuthRegister } className="btn btn-primary inline full green-one">Registrarse</button>
                                </div>
                            </div>
                        </section>

                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-primary inline pd full green-two" 
                                onClick={ onAuthFacebook }> Login con Facebook </button>
                            </div>
                            <div className="col-12">
                                <button
                                className="btn btn-primary inline pd full green-two"
                                onClick={ onAuthGoogle }> Login con Google </button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;