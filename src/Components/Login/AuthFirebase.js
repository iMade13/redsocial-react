import React, {Component} from 'react';
import firebase from 'firebase/app';
import Login from './Login'
import Home from '../Home/Home'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class AuthFirebase extends Component {

    constructor () {
        super()
        this.handleAuthGoogle = this.handleAuthGoogle.bind(this)
        this.handleAuthFacebook = this.handleAuthFacebook.bind(this)
        this.handleAuthRegister = this.handleAuthFacebook.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
      }
    
      state = {
        user: null
      }
    
      componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ user })
        })
      }

        
    handleAuthGoogle() {
        const provider = new firebase
            .auth
            .GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            //redirectFromLogin()
            .catch(error => console.error(`Error: ${error.code}: ${error.message}`));
    }

    handleAuthFacebook(){
        const provider = new firebase.auth.FacebookAuthProvider();

        provider.setCustomParameters({
            'display': 'popup'
        })
        firebase.auth().signInWithPopup(provider)
            .then(() => {
                console.log('Login con facebook exitoso')
                //redirectFromLogin()
            })
            .catch(error => console.error(`Error: ${error.code}: ${error.message}`));

    }

    handleAuthRegister() {}


    handleLogout(){
        firebase.auth().signOut()
      .then(result =>console.log('Te has desconectado,te extrañaremos :('))
      .catch(error => console.error(`Error ${error.code}: ${error.message}`))
    }

    
    render() {
        return (
            <div>
                {
                  this.state.user ? 
                  (<Home onAuthLogOut = {this.handleLogout}/>)
                   : (<Login    
                user={this.state.user}
                onAuthRegister={this.handleAuthRegister}
                onAuthFacebook={this.handleAuthFacebook}
                onAuthGoogle={this.handleAuthGoogle}
                />)
                }
            </div>
        )
    }

}

export default AuthFirebase;