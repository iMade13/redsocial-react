import React from 'react';
import Logo from './Logo.js';

const Header = (props)=> {
    return (
       
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
        
    )
}



export default Header;

