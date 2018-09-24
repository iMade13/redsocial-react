import React from 'react';
import Header from '../Global/Header';
import Perfil from './Perfil';

function Home (props) {
    return (
       <body>
       <Header {...props} /> 
       <main className='container'>
        <Perfil {...props}/>
       </main>
       </body>
    )
}


export default Home;

