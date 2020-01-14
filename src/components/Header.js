import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Links = ({ children, ...props }) => (
    <NavLink
        exact
        className="inline-block mx1 px1 rounded text-decoration-none black"
        activeClassName=" bg-teal white"
        {...props}>
        {
            children
        }
    </NavLink>
)

const Header = () => {
    return (
        <header className="flex justify-between p3">
            <p className="h2 m0"> <Link to="/" className="text-decoration-none black"> Food Recipe App </Link></p>
            <nav className="block">
                <Links to="/">Home </Links>
                <Links to="/favourites">Favourites</Links>
            </nav>
        </header>
    );
}

export default Header;