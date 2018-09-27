import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser, faUsers, faEnvelope, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import Home from '../Pages/Home';
import UserList from '../Pages/UserList';
import Mensajes from '../Pages/Mensajes';
import Posteo from '../Pages/Posteo'
import '../../css/style.css';

library.add(faUser, faUsers, faEnvelope, faSignOutAlt)

function Navbar(props) {
<<<<<<< HEAD
    return (
        <nav>
            <a className="enlaces i iconSvg" to="/profile"><FontAwesomeIcon icon='user'/>
                Perfil</a>
            <a className="enlaces i iconSvg" to="/users"><FontAwesomeIcon icon='users'/>
                Lista de Usuarios</a>
            <a className="enlaces i iconSvg" to="/message"><FontAwesomeIcon icon="envelope"/>
                Mensajes</a>
            <div className="enlaces iconSvg" onClick={props.onAuthLogOut}><FontAwesomeIcon icon="sign-out-alt"/>
                Logout</div>
        </nav>
    )
=======
  return (
>>>>>>> 7992eec890fb58c88959860e97cf5ac0e3ac8542

    <Router>
    <div>
      <ul>
        <li>
          <Link className="enlaces i iconSvg" to="/"><FontAwesomeIcon icon='user'/>Perfil</Link>
        </li>
        <li>
          <Link className="enlaces iconSvg" to="/Publicar"><FontAwesomeIcon icon='users'/>Post</Link>
        </li>
        <li>
          <Link className="enlaces iconSvg" to="/Lista-de-Usuarios"><FontAwesomeIcon icon='users'/>Lista de Usuarios</Link>
        </li>
        <li>
          <Link className="enlaces iconSvg" to="/Mensajes"><FontAwesomeIcon icon='users'/> Mensajes</Link>
        </li>
        <li>
          <Link className="enlaces iconSvg" onClick={props.onAuthLogOut} ><FontAwesomeIcon icon="sign-out-alt"/>Salir</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/Publicar" component={Posteo} />
      <Route path="/Lista-de-Usuarios" component={UserList} />
      <Route path="/Mensajes" component={Mensajes} />
    </div>
  </Router>
  )
}

export default Navbar;
