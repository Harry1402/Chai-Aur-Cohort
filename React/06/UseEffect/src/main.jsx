import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import {Counter} from './Counter.jsx';
import './index.css';
import {Bookslist} from './AllBookslist.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello World</h1>
    <App />
    <Counter />

    <h1>Titles of the below books are </h1>
    <Bookslist />
    <Bookslist />
    <Bookslist />
    <Bookslist />
  </StrictMode>,
);
