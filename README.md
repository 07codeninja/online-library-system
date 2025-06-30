# Online Library System (React + Redux)

This is a basic online library system built with **React**, **React Router**, and **Redux Toolkit** as part of a university assignment.

## Features

### Home Page
- Welcome message
- List of book categories (Fiction, Non-Fiction, Sci-Fi, etc.)
- List of popular books with links to details

### Browse Books Page
- Display all books from Redux state
- Filter books by category via dynamic route: `/books/:category`
- Search bar to filter books by title or author
- "View Details" link for each book

### Book Details Page
- Display title, author, description, and rating of the book
- Dynamic route: `/book/:id`
- "Back to Browse" navigation

### Add Book Page
- Form to add a new book (with validation)
- Redux used to manage book list state
- Redirects to Browse Books after submission

### 404 Page
- Displays when an unknown route is accessed
- Link to return to Home page

## Tech Stack

- React (Vite)
- React Router DOM
- Redux Toolkit
- React Redux
- Plain CSS for styling

## How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/07codeninja/online-library-system.git
   cd online-library-system
