import React from 'react';

const Home = ({onAuthLogOut}) => {
    return (
        <div><h1>Hola Mundo!</h1>
        <button onClick={ onAuthLogOut } >LogOut</button>
        </div>
    )}

    export default Home;