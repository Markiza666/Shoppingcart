import React from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
}

interface BookProps {
    book: Book;
}

const BookComponent: React.FC<BookProps> = ({ book }) => {
    return (
        <div className="book">
            <div className='bookTitel'>
            <h3>{book.title}</h3>
            <h6>Av: {book.author}</h6>
        </div>
        <p>{book.description}</p>
        </div>
    );
};

export default BookComponent;