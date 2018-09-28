import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser, faUsers, faEnvelope, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import '../../css/style.css'

library.add(faUser, faUsers, faEnvelope, faSignOutAlt)

function Navbar(props) {
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

}

export default Navbar;
