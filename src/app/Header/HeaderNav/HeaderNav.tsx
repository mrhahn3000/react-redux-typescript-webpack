import React from 'react'
import {NavLink} from 'react-router-dom'

const HeaderNav = () => {
    return (
        <nav>
            <NavLink to="/" exact activeClassName="active">Page 1</NavLink>
            <NavLink to="/page2" activeClassName="active">Page 2</NavLink>
            <NavLink to="/page3" activeClassName="active">Page 3</NavLink>
        </nav>
    );
};

export default HeaderNav;
