import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/database';

class Publicaciones extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            pictures: []
        };
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

}

export default Publicaciones;