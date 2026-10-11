import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import HomePage from '../Pages/HomePage/HomePage';
import Books from '../Pages/Books/Books';
import wishlist from '../Components/Wishlist/wishlist';

 const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index : true ,
                Component:HomePage
            },
            {
                path:'books',
                Component:Books
            },
            {
                path: 'wishList',
                Component:wishlist
            },

        ]
    }
])
export default router ;