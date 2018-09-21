import React, {Component} from 'react';
import firebase from 'firebase/app';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class AuthFirebase extends Component {
    handleAuthGoogle() {
        const provider = new firebase
            .auth
            .GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            //redirectFromLogin()
            .catch(error => console.log(`Error: ${error.code}: ${error.message}`));
    }
    handleAuthFacebook(){
        const provider = new firebase.auth.GoogleAuthProvider();

        provider.setCustomParameters({
            'display': 'popup'
        })
        firebase.auth().signInWithPopup(provider)
            .then(() => {
                console.log('Login con facebook exitoso')
                //redirectFromLogin()
            })
            .catch(error => console.log(`Error: ${error.code}: ${error.message}`));

    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary inline pd full green-two" onClick={this.handleAuthFacebook}>
                        Login con facebook</button>
                </div>
                <div className="col-12">
                    <button
                        className="btn btn-primary inline pd full green-two"
                        onClick={this.handleAuthGoogle}>
                        Login con google</button>
                </div>
            </div>
        )
    }

}

export default AuthFirebase;