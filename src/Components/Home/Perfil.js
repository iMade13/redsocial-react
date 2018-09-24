import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';


library.add(faBars);
library.add(faEnvelope);
library.add(faUserCircle);
library.add(faEdit);
library.add(faGlobeAmericas);
const spanStyle ={ display:'none'}

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = { disabled: true }
      }

      handleClick() {
        this.setState( {disabled: !this.state.disabled} )
      } 

    render (){
        return (
            <div className="col col-md-6 mx-auto profile">
                <div className="row">
                    <div className="col-12 center">
                        <div id="photo" className="center">
                        <img  className="profile-photo" src={this.props.user.photoURL} alt="perfil"/>
                        </div>
                        <span id="userName">{this.props.user.displayName} </span>
                        <FontAwesomeIcon icon='envelope'  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"/>
                        <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label className="col-form-label">Message:</label>
                                                <textarea className="form-control" id="messageText"></textarea>
                                                <span style={spanStyle} id="msnOk">Mensaje Enviado</span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary"  id="close">Send message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col profile-data profile-icon">
                        <FontAwesomeIcon icon='user-circle'/>
                        <input placeholder='Ingresa Rol' className="infoProfile" id="rol" disabled={(this.state.disabled)? "disabled" : ""}/>
                        <FontAwesomeIcon icon='edit' id="enabledRol" onClick = {this.handleClick.bind(this)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col profile-data profile-icon">
                        <FontAwesomeIcon icon='envelope'/>
                        <span className="infoProfile" id="userEmail">{this.props.user.email}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col profile-data profile-icon">
                        <FontAwesomeIcon icon='globe-americas'/>
                        <input placeholder='Ingresa País' className="infoProfile" id="country" disabled={(this.state.disabled)? "disabled" : ""}/>
                        <FontAwesomeIcon icon='edit' className='profile-icon' onClick = {this.handleClick.bind(this)} id="enabledCountry"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Perfil;