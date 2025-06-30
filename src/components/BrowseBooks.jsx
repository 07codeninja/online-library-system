import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseBooks = () => {
    const { category } = useParams(); // optional param
    const books = useSelector((state) => state.books);
    const [search, setSearch] = useState('');

    const filteredBooks = books.filter((book) => {
        const matchesCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true;
        const matchesSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div style={styles.container}>
            <h2>{category ? `Books in "${category}"` : 'All Books'}</h2>

            <input
                type="text"
                placeholder="Search by title or author"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.search}
            />

            {filteredBooks.length === 0 ? (
                <p>No books found.</p>
            ) : (
                <ul style={styles.bookList}>
                    {filteredBooks.map((book) => (
                        <li key={book.id} style={styles.bookItem}>
                            <strong>{book.title}</strong> by {book.author}
                            <br />
                            <Link to={`/book/${book.id}`}>View Details</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
    },
    search: {
        margin: '1rem 0',
        padding: '0.5rem',
        width: '100%',
        maxWidth: '400px',
    },
    bookList: {
        listStyle: 'none',
        padding: 0,
    },
    bookItem: {
        marginBottom: '1.5rem',
        borderBottom: '1px solid #ccc',
        paddingBottom: '1rem',
    },
};

export default BrowseBooks;
