import { useState, useEffect, use } from 'react';

import { getMyBooks, getTBR } from '../services/get_book_info';

import '../style/Shelf.css';

import Book from './Book';

function Shelf() {
    const [books, setBooks] = useState([]);
    const [tbr, setTBR] = useState([]);

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

    useEffect(() => {
        const fetchTBR = async () => {
            const data = await getTBR();
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
            setTBR(formattedBooks);
        };
        fetchTBR();
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
        <h2 className='my-shelf'>My TBR</h2>
        <div className="book-grid">
        {tbr.map((book, index) => (
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