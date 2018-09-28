import React from 'react';
import Header from '../Global/Header';
import Publicidad from '../Global/Publicidad';
import Navbar from '../Global/Navbar';
import Menu from '../Global/Menu'
import Post from '../Post/Post'
import Profile from './Profile';
import ShowPost from '../Post/ShowPost'

const Home = (props) => {
    return (
        <section>
            <Header {...props}/>
            <main className="container">
                <div className="row">
                    <div className="col-md-3 barra-lateral-izquierda" id="barra-lateral-izquierda">
                        <Navbar {...props}/>
                        <Publicidad/>
                    </div>
                    <a href='#' className="fondo-enlace d-md-none" id="fondo-enlace"></a>

                    <div className="col col-md-6 mx-auto contenido-principal profile">
                        <Menu/> {/* <Users /> */}
                        {/* <Messages {...props}/> */}

                        <Post {...props}/>
                        <ShowPost {...props}/>
                    </div>
                </div>
                {/* <Profile {...props}/> */}
            </main>
        </section>
    )

}

export default Home;
