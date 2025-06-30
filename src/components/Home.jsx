import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'History', 'Biography'];

const popularBooks = [
    { id: 1, title: 'Dune' },
    { id: 2, title: '1984' },
    { id: 3, title: 'Sapiens' },
];

const Home = () => {
    return (
        <div className="container">
            <h2>Welcome to the Online Library 📖</h2>

            <section className="section">
                <h3>Book Categories</h3>
                <ul className="list">
                    {categories.map((category) => (
                        <li key={category}>
                            <Link to={`/books/${category}`}>{category}</Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section">
                <h3>Popular Books</h3>
                <ul className="list">
                    {popularBooks.map((book) => (
                        <li key={book.id}>
                            <Link to={`/book/${book.id}`}>{book.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Home;
