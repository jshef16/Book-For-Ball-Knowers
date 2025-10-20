import { useState, useEffect } from 'react';

import { getMyBooks } from '../services/get_book_info';

import '../style/Shelf.css';

import Book from './Book';

function Shelf() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getMyBooks();
            const userBooks = data?.data?.me?.[0]?.user_books || [];
            const formattedBooks = userBooks.map(ub => {
                const contributors = ub.book?.cached_contributors || [];
                const names = contributors
                    .filter(c => c?.contribution === null)
                    .map(c => c?.author?.name)
                    .filter(Boolean);
                const author = names.length ? names.join(', ') : "Unknown Author";
                return {
                    title: ub.book?.title || "Unknown Title",
                    author,
                    img: ub.book?.image?.url || "",
                };
            });
            setBooks(formattedBooks);
        };
        fetchBooks();
    }, []);
        
    return (
    <div className="shelf-container">
      <h2 className='my-shelf'>My Shelf</h2>
      <div className="book-grid">
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            img={book.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Shelf;