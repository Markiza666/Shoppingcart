// import React from 'react';
import './App.css';
import { Header } from './components/Header';
import BookComponent from './components/Book';
import Book from './components/Book'; // Importera Book-interfacet
import { CartProvider } from './components/CartContext';


interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

const books: Book[] = [
  { id: 1, title: 'A sing of Four', author: 'Sir Arthur Conan Doyle', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis deserunt laboriosam possimus officia a dicta sapiente corporis esse atque praesentium quas pariatur, consequuntur soluta quod non eligendi voluptatum at animi!' },
  { id: 2, title: 'A Study in Scarlet', author: 'Sir Arthur Conan Doyle', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis deserunt laboriosam possimus officia a dicta sapiente corporis esse atque praesentium quas pariatur, consequuntur soluta quod non eligendi voluptatum at animi!' },
  { id: 3, title: 'Baskervilles Hound', author: 'Sir Arthur Conan Doyle', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis deserunt laboriosam possimus officia a dicta sapiente corporis esse atque praesentium quas pariatur, consequuntur soluta quod non eligendi voluptatum at animi!' },
  { id: 4, title: 'The Adventures of Sherlock Holmes', author: 'Sir Arthur Conan Doyle', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis deserunt laboriosam possimus officia a dicta sapiente corporis esse atque praesentium quas pariatur, consequuntur soluta quod non eligendi voluptatum at animi!' },
];

function App() {
  return (
      <CartProvider> {/* Wrap appen med CartProvider */}
          <div className="App">
              <Header />
              <main>
                  {books.map(book => (
                      <BookComponent key={book.id} book={book} />
                  ))}
              </main>
          </div>
      </CartProvider>
  );
}

export default App;
