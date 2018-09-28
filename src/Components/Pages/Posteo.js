import React from 'react';
import Header from '../Global/Header';
import Publicidad from '../Global/Publicidad';
import Post from '../Global/Post';
//import Navbar from '../Global/Navbar';

function Posteo(props) {
    return (
        <section>
            <Header {...props}/>
            <main className="container">
                <div className="row">
                    <div className="col-md-3 barra-lateral-izquierda" id="barra-lateral-izquierda">
                        {/* <Navbar {...props}/> */}
                        <Publicidad/>
                    </div>

                    <div className="col col-md-6 mx-auto contenido-principal profile"></div>
                    <Post {...props}/>
                </div>
                
            </main>
        </section>
    )
}

export default Posteo;
