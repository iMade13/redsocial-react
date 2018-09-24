import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import image1 from "../../img/image-1.jpg"
import image2 from "../../img/image-2.jpg"
import image3 from "../../img/image-3.jpg"
import image4 from "../../img/image-4.jpg"
import image5 from "../../img/image-5.jpg"


library.add(faUser)
library.add(faUsers)
library.add(faEnvelope)
library.add(faSignOutAlt)

function Menu(props) {
    return (
        <aside>
            <div className="col-md-3 barra-lateral-izquierda">
                <nav>
                    <a href="profile.html" className="enlaces"><FontAwesomeIcon icon='user'/>
                        Perfil</a>
                    <a href="users.html" className="enlaces"><FontAwesomeIcon icon='users'/>
                        Lista de Usuarios</a>
                    <a href="mensajes.html" className="enlaces"><FontAwesomeIcon icon="envelope"/>
                        Mensajes</a>
                    <a className="enlaces" onClick={props.onAuthLogOut}><FontAwesomeIcon icon="sign-out-alt"/>
                        Logout</a>
                </nav>
            </div>
            <div className="col d-block imagenes-lateral">
                <h3>Publicidad</h3>
                <div className="images">
                        <figure>    
                            <img src={image1} width="150" alt="imagen-publicidad" />
                        </figure> 
                        <figure>
                            <img src={image2} width="150" alt="imagen-publicidad"/>
                        </figure>
                        <figure>
                            <img src={image3} width="150" alt="imagen-publicidad"/>
                        </figure>
                        <figure>
                            <img src={image4} width="150" alt="imagen-publicidad"/>
                        </figure>
                        <figure>
                            <img src={image5} width="150" alt="imagen-publicidad"/>
                        </figure>
                    </div>
            </div>
        </aside>

    )

}

export default Menu;
