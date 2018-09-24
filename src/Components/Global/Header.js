import React, {Component} from 'react';
import Logo from './Logo.js'

class Header extends Component {
    render() {
        return (
            <div className="col-4 col-md-3 logo">
                <Logo />
            </div>
            

        )
    }

}

export default Header;