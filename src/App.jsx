import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const Home = lazy(() => import('./components/Home'));
const BrowseBooks = lazy(() => import('./components/BrowseBooks'));
const BookDetail = lazy(() => import('./components/BookDetail'));
const AddBook = lazy(() => import('./components/AddBook'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
