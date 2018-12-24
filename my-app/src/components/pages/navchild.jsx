import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class NavChild extends Component {
    state = {  }
    render() { 
        return ( <div>

            <div className="styleschild">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                        <NavLink to="/archive">Archive</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                        <NavLink to="/feature">Feature</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                        <NavLink to="/setting">Settings</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </div> );
    }
}
 
export default NavChild;