import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
const Root = () => {
    return (
        <div>
          <div className='mx-auto p-3 max-w-7xl'>
             <Header></Header> 
          </div>
           <main className='mx-auto p-3 max-w-6xl'>
            <Outlet></Outlet>
           </main>
           <div className='mx-auto p-6 max-w-7xl'>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;