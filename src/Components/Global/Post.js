import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faImage, faBars} from '@fortawesome/free-solid-svg-icons'


library.add(faImage, faBars)


class Post extends Component {
    render() {
        return (
            <div className="publicar">
                <div className="row">
                    <div className="col">
                        <form action="">
                            <textarea name="mensaje" id="comment" placeholder="¿Qué te gustaría publicar?"></textarea>
                            <div className="contenedor-botones d-flex justify-content-between">
                                <div className="media">
                                    <input type="file" //type="submit"
                                         className="inputfile" onChange={this.props.onUpload}/>
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