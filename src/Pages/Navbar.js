import React from "react";
import notes from './Messages'

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-info'>
        <ul className="navbar-nav">
            <li className="nav-item">
                <i className="bi bi-arrow-clockwise mx-3" type='button'></i>
            </li>
        </ul>
    <ul className="navbar-nav">
        <li className="nav-item">
            У вас повідомлень: {notes.length}
        </li>
    </ul>
        </nav>
    )
}
export default Navbar