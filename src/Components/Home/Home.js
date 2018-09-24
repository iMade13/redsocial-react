import React from 'react';
import Header from '../Global/Header';
import Menu from '../Global/Menu'
import Publicidad from '../Global/Publicidad';
import Post from '../Post/Post'

function Home(props) {
    return (
        <section>
            <Header {...props}/>
            <main className="container">
                <div className="row">
                    <div className="col-md-3 barra-lateral-izquierda" id="barra-lateral-izquierda">
                        <Menu {...props}/>
                        <Publicidad/>
                    </div>
                  
                    <div className="col col-md-6 mx-auto contenido-principal profile">
                        <Post/>
                    </div>
                </div>

            </main>
        </section>

    )
}

export default Home;
