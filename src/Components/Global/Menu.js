import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faImage, faBars} from '@fortawesome/free-solid-svg-icons'


library.add(faImage, faBars)

class Menu extends Component {
    constructor(props) {
        super(props)
        this.fondo = React.createRef()
        this.btnMenu = React.createRef()
        this.barraLateral = React.createRef()
        this.toggle = this
            .toggle
            .bind(this)
        
    }
    
    toggle() {
        let boton = this.btnMenu.current;
        let fondo_enlace = this.fondo.current;
        let barra_lateral = this.barraLateral.current;

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
            <div className='col' ref={this.barraLateral}>
                <a ref={this.fondo} className="fondo-enlace d-md-none" id="fondo-enlace"></a>
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