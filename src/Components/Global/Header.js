import React from 'react';
<<<<<<< HEAD
import Logo from './Logo.js'
=======
import Logo from './Logo.js';
>>>>>>> 97b8c157ac0e6ea42078b335fdec8d1445b9f7cd

const Header = (props) => {
    return (
<<<<<<< HEAD
        <header>
            <div className="container">
                <div className="row" id="profile">
                    <div className="col-4 col-md-3 logo">
                        <Logo />
                    </div>
                    <div className="col col-md-8">
                        <span className="displayName">{props.user.displayName}</span>
                        <img className="imagen" src={props.user.photoURL} alt="userURL" width="30"/>
                    </div>
                </div>
            </div>
        </header>
=======
       
            <header>
                <div className="container">
                    <div className="row" id="profile">
                        <div className="col-4 col-md-3 logo">
                        <Logo/>
                        </div>
                        <div className="col col-md-8">
                            <span className="displayName">{props.user.displayName} </span>   
                            <img className="imagen" src={props.user.photoURL} />
                        </div>
                    </div>
                </div>
            </header>
        
>>>>>>> 97b8c157ac0e6ea42078b335fdec8d1445b9f7cd
    )
}

export default Header;
