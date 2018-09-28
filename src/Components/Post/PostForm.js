import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faImage, faBars} from '@fortawesome/free-solid-svg-icons'

library.add(faImage, faBars)

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.addPost = this
            .addPost
            .bind(this);
    }

    addPost(event) {
        event.preventDefault();
        this
            .props
            .addPost(this.textarea.value);
        this.textarea.value = '';
        this
            .textarea
            .focus();
    }

    render() {
        return (
            <div className="publicar">
                <div className="row">
                    <div className="col">
                        <form>
                            <textarea
                                name="mensaje"
                                id="comment"
                                placeholder="¿Qué te gustaría publicar?"
                                ref={textarea => this.textarea = textarea}></textarea>
                            <div className="contenedor-botones d-flex justify-content-between">
                                <div className="media">
                                    <input type="file" onChange={this.props.onUpload} //type="submit"
                                        className="inputfile"/>
                                    <label htmlFor="file">
                                        <FontAwesomeIcon icon="image"/>
                                    </label>
                                </div>
                                <div>
                                    <button onClick={this.addPost} id="btn-publicar">Publicar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default PostForm;