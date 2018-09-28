import React, {Component} from 'react';
import firebase from 'firebase/app';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrashAlt, faEdit, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt, faEdit, faThumbsUp)

class ShowPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            uploadValue: 0
        }
  
        this.postContent = props.postContent
        this.postId = props.postId
        // this.props.user.displayName = props.user.displayName
        // this.props.user.photoURL = props.user.photoURL
    }

    handleClick() {
        this.setState({
            disabled: !this.state.disabled
        })
    }

    handleRemove(postId) {
        const res = window.confirm('¿Quieres eliminarlo?')
        if (res) {
            this
                .props
                .removeNote(postId);
        }
        return
    }

    render() {
        return (
            <div id='contentPublicaciones'>
                <div className="row postTop">
                    <div className="col-auto foto">
                        <div href="" className="commentName mr-0"><img className="profile-comment" width="40" src={this.props.user.photoURL}/></div>
                    </div>
                    <div className="col-9">
                        <span>{this.props.user.displayName}</span>
                        {/* <h6>{profileUserPost.rol}</h6> */}
                    </div>
                </div>
                <div className="row postImageDiv">
                    <div className="col">
                        <img className="img-post" width="100" src={this.state.picture}/></div>
                    </div>
                <div className="row">
                    <div className="col" id="cont">
                        <textarea className="col-12 col-md-12">{this.postContent}</textarea>
                        <div className="caja-botones d-flex justify-content-between align-items-center">
                            <span></span>
                            <span>
                                <FontAwesomeIcon icon="thumbs-up" className="iconPost"/></span>
                            <FontAwesomeIcon
                                icon="edit"
                                className="iconPost"
                                onClick={this
                                .handleClick
                                .bind(this)}/>
                            <FontAwesomeIcon
                                icon="trash-alt"
                                className="iconPost"
                                onClick={() => this.handleRemove(this.postId)}/>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}


export default ShowPost;