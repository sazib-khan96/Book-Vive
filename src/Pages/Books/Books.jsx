import React, { useEffect, useState } from 'react';
import Book from '../../Components/Book/Book';

const Books = () => {
   const url ='https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'
   
 const [books,setBooks] = useState([])
   useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(bookData =>{
        setBooks(bookData)
    })
   },[])

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }
        </div>
    );
};

export default Books;