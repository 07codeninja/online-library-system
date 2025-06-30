import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetail = () => {
    const { id } = useParams();
    const books = useSelector((state) => state.books);

    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return (
            <div style={styles.container}>
                <h2>Book Not Found</h2>
                <Link to="/books" style={styles.link}>Back to Browse</Link>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Category:</strong> {book.category}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Rating:</strong> {book.rating} ⭐</p>

            <Link to="/books" style={styles.link}>Back to Browse</Link>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
    },
    link: {
        marginTop: '1rem',
        display: 'inline-block',
        textDecoration: 'underline',
        color: '#333',
    },
};

export default BookDetail;
