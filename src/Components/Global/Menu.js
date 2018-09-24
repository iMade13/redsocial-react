import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import '../../css/style.css'

library.add(faUser)
library.add(faUsers)
library.add(faEnvelope)
library.add(faSignOutAlt)

function Menu(props) {
    return (
        <nav>
            <a href="" className="enlaces i"><FontAwesomeIcon icon='user'/>
                 Perfil</a>
            <a href="" className="enlaces i"><FontAwesomeIcon icon='users'/>
                 Lista de Usuarios</a>
            <a href="" className="enlaces i"><FontAwesomeIcon icon="envelope"/>
                 Mensajes</a>
            <a href="" className="enlaces" onClick={props.onAuthLogOut}><FontAwesomeIcon icon="sign-out-alt"/>
                Logout</a>
        </nav>
    )
    
}
 

export default Menu;
