import React from 'react';
import Header from '../Global/Header';
import Messages from '../Global/Messages'
import Navbar from '../Global/Navbar';

//falta el componente de user y amigos 

function Mensajes(props) {
    return (
        <section>
            <Header {...props}/>
            <main className="container">
                <div className="row">
                    <div className="col-md-3 barra-lateral-izquierda" id="barra-lateral-izquierda">
                        <Navbar {...props}/>
                        
                    </div>

                    <div className="col col-md-6 mx-auto contenido-principal profile"></div>
                    <Messages {...props}/>
                </div>
                
            </main>
        </section>
    )
}

export default Mensajes;
