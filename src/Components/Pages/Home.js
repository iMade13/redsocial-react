import React from 'react';
import Header from '../Global/Header';
import Publicidad from '../Global/Publicidad';
//import Post from '../Pages/Posteo'
//import Navbar from '../Global/Navbar';
//import Menu from '../Global/Menu'
//import Messages from './Messages';
//import SendMessages from '../Messages/SendMessages';
//import Users from '../Users/GetUsers';
//import ShowPost from '../Post/ShowPost'
import Profile from '../Global/Profile';
//import Navbar from '../Global/Navbar';

function Home(props) {
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
                    <Profile {...props}/>
                </div>
                
            </main>
        </section>
    )
}

export default Home;
