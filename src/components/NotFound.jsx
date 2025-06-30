import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" style={styles.link}>Go back to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        padding: '4rem',
        textAlign: 'center',
    },
    link: {
        marginTop: '1rem',
        display: 'inline-block',
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '0.6rem 1.2rem',
        borderRadius: '4px',
        textDecoration: 'none',
    },
};

export default NotFound;
