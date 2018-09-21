import React, {Component} from 'react';
import firebase from 'firebase/app';
import '../../css/login.css'

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            user: null,
            email: '',
            password: '',
        }
    }
     
    //Para obtener los datos del usuario logeado
    componentWillMount() {
        firebase
            .auth()
            .onAuthStateChanged(user => {
                this.setState({user});
            })
    }

    handleRegisterWithFirebase() {
        const email = this.ref.email.value
        const password = this.ref.pass.value

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('usuario creado con exito')
                //redirectFromLogin()
            })
            .catch((error) => {
                console.log('error de firebase: ' + error.message)
            })
    }

    render()
    {
        return (
            <section>
                <input
                    ref='email'
                    type="email"
                    placeholder="Email"
                    className="form-control pd"/>
                <input
                    ref='pass'
                    type="password"
                    placeholder="Password"
                    className="form-control pd"/>
                <div className="row">
                    <div className="col-6">
                        <button
                            type="submit"
                            className="btn btn-primary inline full green-one">Log in </button>
                    </div>
                    <div className="col-6">
                        <button onClick={this.handleRegisterWithFirebase} className="btn btn-primary inline full green-one">Registrarse</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default SignIn;