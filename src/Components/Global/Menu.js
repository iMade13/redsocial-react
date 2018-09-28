import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faImage, faBars} from '@fortawesome/free-solid-svg-icons'
import '../../css/style-post.css'

library.add(faImage, faBars)

class Menu extends Component {
    constructor(props) {
        super(props)
        //this.fondo = React.createRef()
        this.btnMenu = React.createRef()
        //this.barraLateral = React.createRef()
        this.toggle = this
            .toggle
            .bind(this)
        
    }
    
    toggle() {
        let boton = this.btnMenu.current;
        let fondo_enlace = document.getElementById('fondo-enlace')
        let barra_lateral = document.getElementById('barra-lateral-izquierda')

        boton.addEventListener('click', function () {
            fondo_enlace
                .classList
                .toggle('active');
            barra_lateral
                .classList
                .toggle('active')
        });

        fondo_enlace.addEventListener('click', function () {
            fondo_enlace
                .classList
                .toggle('active');
            barra_lateral
                .classList
                .toggle('active');
        });
    }

    render() {
        return (
            <div className='col'>
                <a
                    className="btn-menu d-md-none d-flex justify-content-between"
                    ref={this.btnMenu}
                    id="btn-menu"
                    onClick={this.toggle}>
                    <span>Menu</span>
                    <FontAwesomeIcon icon="bars"/>
                </a>
            </div>
        )
    }

}

export default Menu;