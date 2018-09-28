import React, {Component} from 'react';
import firebase from 'firebase'
import 'firebase/database'
import PostForm from './PostForm';
import ShowPost from './ShowPost';

let currentUser = '';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            post: [],
            pictures: [],
            userId: ''
        };

        currentUser = firebase
            .auth()
            .currentUser;

        this.addPost = this
            .addPost
            .bind(this);
        this.removePost = this
            .removePost
            .bind(this);

    };

    componentDidMount() {
        const {post} = this.state;

        firebase
            .database()
            .ref(`users/'${currentUser.uid}`)
            .child('post')
            .on('child_added', snap => {
                post.push({
                    postId: snap.key,
                    postContent: snap
                        .val()
                        .postContent
                })
                console.log(post)
                this.setState({post})
            });

        firebase
            .database()
            .ref()
            .child('post')
            .on('child_removed', snap => {
                for (let i = 0; i < post.length; i++) {
                    if (post[i].postId = snap.key) {
                        post.splice[i,
                            1];
                    }
                }

                this.setState({post});
            })
    }

    addPost(post) {
        firebase
            .database()
            .ref()
            .child('post')
            .push()
            .set({postContent: post});
    }

    removePost(postId) {
        firebase
            .database()
            .ref()
            .child(postId)
            .remove();
    }

    handleUpload(event) {
        const file = event.target.files[0];
        const storageRef = firebase
            .storage()
            .ref(`fotos/${file.name}`);
        const task = storageRef.put(file);

        // Listener que se ocupa del estado de la carga del fichero
        task.on('state_changed', snapshot => {

            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({uploadValue: percentage})
        }, error => {

            console.error(error.message);
        }, () => {
            const record = {
                photoURL: this.state.user.photoURL,
                displayName: this.state.user.displayName,
                image: task.snapshot.downloadURL
            }
            const dbRef = firebase
                .database()
                .ref('pictures');
            const newPicture = dbRef.push();
            newPicture.set(record);
        });
    }

    render() {
        return (
            <div>
                <div className="publicar">
                    <PostForm addPost={this.addPost}/>
                </div>

                <div id='contentPublicaciones'>
                    {/* {this
                        .state
                        .post
                        .map(posteo => {
                            return (<ShowPost
                                postContent={posteo.posteoContent}
                                noteId={posteo.posteoId}
                                key={posteo.posteoId}
                                removeNote={this.removePost}
                                />)
                        })
                    } */}

                  {/* <ShowPost /> */}
                </div>
            </div>

        );

    }
}

export default Post;
