import React, { } from 'react';

import NavChild from './navchild';
import IndexPage from './indexPage';
//import IndexPage from '.';

const Layout = () => {
    return ( <div>
                <NavChild/>
                <div className="container"> 
                    <h1>Emirates.com</h1>
                    <IndexPage />
                </div>
            </div>  
            );
}

export default Layout;