import React from 'react';
import { NavLink } from 'react-router';
const Header = () => {
    return (
       <header className='flex items-center justify-between p-3 bg-white rounded-full shadow-2xl'>
        
            <h1>Book Vive</h1>
        
        <ul className='flex gap-5 justify-center items-center'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="books">Books</NavLink>
            <NavLink to="wishlist">WishList</NavLink>
        </ul>
        <button className='my-custom-btn'>Sign In</button>
       </header>
    );
};

export default Header;