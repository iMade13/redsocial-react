import React from 'react';
import Header from '../Global/Header';
import Publicidad from '../Global/Publicidad';
<<<<<<< HEAD
import Post from '../Pages/Post'
import Navbar from '../Global/Navbar';
import Menu from '../Global/Menu'
//import Messages from './Messages';
//import SendMessages from '../Messages/SendMessages';
//import Users from '../Users/GetUsers';
import Profile from './Profile';
import ShowPost from '../Post/ShowPost'
=======
import Profile from '../Global/Profile';
import Navbar from '../Global/Navbar';


>>>>>>> 7992eec890fb58c88959860e97cf5ac0e3ac8542

function Home(props) {
    return (
        <section>
            <Header {...props}/>
            <main className="container">
                <div className="row">
                    <div className="col-md-3 barra-lateral-izquierda" id="barra-lateral-izquierda">
                        <Navbar {...props}/>
                        <Publicidad/>
                    </div>
<<<<<<< HEAD
                    <div className="col col-md-6 mx-auto contenido-principal profile">
                        <Menu/>
                        {/* <Users /> */}
                        {/* <Messages {...props}/> */}
                        <Post/> 
                    </div>
                </div>
                <div id="publicaciones">
                    <ShowPost {...props}/>
                </div>
                {/* <Profile {...props}/> */}
=======

                    <div className="col col-md-6 mx-auto contenido-principal profile"></div>
                    <Profile {...props}/>
                </div>
                
>>>>>>> 7992eec890fb58c88959860e97cf5ac0e3ac8542
            </main>
        </section>
    )
}

export default Home;
