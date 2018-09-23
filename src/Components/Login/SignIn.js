// import React, {Component} from 'react';
// import firebase from 'firebase/app';
// import '../../css/login.css'

// class SignIn extends Component {
//     constructor(){
//         super();
//         this.state = {
//             user: null,
//             email: '',
//             password: '',
//         }
//     }
     
//     //Para obtener los datos del usuario logeado
//     componentWillMount() {
//         firebase
//             .auth()
//             .onAuthStateChanged(user => {
//                 this.setState({user});
//             })
//     }

//     handleRegisterWithFirebase() {
//         const email = this.ref.email.value
//         const password = this.ref.pass.value

//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, password)
//             .then(() => {
//                 console.log('usuario creado con exito')
//                 //redirectFromLogin()
//             })
//             .catch((error) => {
//                 console.log('error de firebase: ' + error.message)
//             })
//     }

//     render()
//     {
//         return (
           
//         )
//     }
// }

// export default SignIn;