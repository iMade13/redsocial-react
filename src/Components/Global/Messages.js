import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


library.add(faEnvelope)

class Messages extends Component {
    render() {
        return (
            <section>
                <div className="col col-md-8 d-flex justify-content-center">
                    <button className="btn btn-messages" id="receivedMsnButtom">
                      <FontAwesomeIcon icon="envelope" className="iconSvg"/>

                        Recibidos</button>
                    <button className="btn btn-messages" id="sendMsnButtom">
                    <FontAwesomeIcon icon="envelope" className="iconSvg"/>
                        Enviados</button>
                </div>

            </section>
        )
    }
}

export default Messages;