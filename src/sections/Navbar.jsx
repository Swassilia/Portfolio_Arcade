import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { navLinks } from "../constants";

const NavItems = ({ onClick = () => { } }) => (
    <ul className="nav-links">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    onClick={onClick}>
                    {item.name}
                </NavLink>
            </li>
        ))}
    </ul>
);

function Navbar() {
    const [menuOpen, setMenu] = useState(false);

    const handleOpeningMenu = () => setMenu(!menuOpen);
    const closeMenu = () => setMenu(false);

    return (
        <header className="navbar">
            <a href="/" className="logo">Wassila</a>

            <nav>
                <NavItems />
                {/* <button className="insert-coin">INSERT COIN</button> */}
            </nav>

        </header>
    );
}

export default Navbar;