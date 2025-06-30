import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>📚 Online Library</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Browse Books</Link>
                <Link to="/add-book">Add Book</Link>
            </nav>
        </header>
    );
};

export default Header;
