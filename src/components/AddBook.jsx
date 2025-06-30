import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const books = useSelector((state) => state.books);

    const [form, setForm] = useState({
        title: '',
        author: '',
        category: '',
        description: '',
        rating: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const err = {};
        if (!form.title) err.title = 'Title is required';
        if (!form.author) err.author = 'Author is required';
        if (!form.category) err.category = 'Category is required';
        if (!form.description) err.description = 'Description is required';
        if (!form.rating || isNaN(form.rating) || form.rating < 1 || form.rating > 5)
            err.rating = 'Rating must be between 1 and 5';
        return err;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const newBook = {
                id: books.length + 1,
                ...form,
                rating: parseFloat(form.rating),
            };
            dispatch(addBook(newBook));
            navigate('/books');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                {['title', 'author', 'category', 'description', 'rating'].map((field) => (
                    <div key={field} style={styles.field}>
                        <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                        <input
                            type={field === 'rating' ? 'number' : 'text'}
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                        />
                        {errors[field] && <p style={styles.error}>{errors[field]}</p>}
                    </div>
                ))}
                <button type="submit" style={styles.button}>Add Book</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#2980b9',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
    },
    error: {
        color: 'red',
        fontSize: '0.9rem',
    },
};

export default AddBook;
