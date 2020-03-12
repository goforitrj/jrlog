import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id="menu-list">
                <ul>
                    <li>
                        <Link className="text-link" to="/">
                            Story
                        </Link>
                    </li>
                    <li>
                        <Link className="text-link" to="/notes">
                            Notes
                        </Link>
                    </li>
                    <li>
                        <Link className="text-link" to="/notes">
                            Agency
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
