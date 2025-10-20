import '../style/Book.css';

function Book({ title, author, img }) {
    return (
        <div className="book-card">
            <img src={img} alt={`${title} cover`} className="book-image" />
            <div className="book-info">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
            </div>
        </div>
    );
}

export default Book;