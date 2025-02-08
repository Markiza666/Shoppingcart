import React from 'react';
import Button from './Button';
import { useCart } from './UseCart';

export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
}
interface BookProps {
    book: Book;
}

const BookComponent: React.FC<BookProps> = ({ book }) => {
    const { addToCart } = useCart(); // Hämta addToCart från context

    return (
        <div className="book">
            <div className='bookTitel'>

                <h3>{book.title}</h3>

                <h6>Av: {book.author}</h6>

            </div>

            <p>{book.description}</p>
            <Button onClick={() => addToCart(book)}>Add to cart</Button>
        </div>
    );
};

export default BookComponent;