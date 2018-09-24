import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faImage} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import '../../css/style-post.css'

library.add(faImage)
library.add(faBars)

class Post extends Component {
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
            fondo_enlace.classList.toggle('active');
            barra_lateral.classList.toggle('active')
        });

        fondo_enlace.addEventListener('click', function () {
            fondo_enlace.classList.toggle('active');
            barra_lateral.classList.toggle('active');
        });
    }

    render() {
        return (
            <div className="publicar">
            <a ref = { this.fondo } className="fondo-enlace d-md-none" id="fondo-enlace"></a>
                <div className="row">
                    <div className='col' ref = { this.barraLateral }>
                        <a className="btn-menu d-md-none d-flex justify-content-between" ref = { this.btnMenu } d="btn-menu" onClick={this.toggle}>
                            <span>Menu</span>
                            <FontAwesomeIcon icon="bars"/>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form action="">
                            <textarea name="mensaje" id="comment" placeholder="¿Qué te gustaría publicar?"></textarea>
                            <div className="contenedor-botones d-flex justify-content-between">
                                <div className="media">
                                    <input type="file" //type="submit"
                                        name="file" id="file" className="inputfile"/>
                                    <label htmlFor="file">
                                        <FontAwesomeIcon icon="image"/>
                                    </label>
                                </div>
                                <div>
                                    <button type="button" id="btn-publicar">Publicar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Post;