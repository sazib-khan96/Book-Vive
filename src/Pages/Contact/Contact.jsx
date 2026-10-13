import React from 'react';
import imgs  from "../../assets/contact.png"

const Contact = () => {
    return (
        <div className=''>
          <div className='flex items-center justify-center h-[150px] bg-yellow-500'>
             <h1 className='text-3xl'>Contact</h1> 
          </div>
          {/* conntact form  */}
          <div className='mt-8 flex gap-5'>
                <form className='space-y-3 flex-1 px-8 shadow-2xl rounded-xl'>
                    <input type="text" placeholder='Your Name' className='border border-gray-200 p-2 outline-none w-full' />
                    <br />
                    <input type="email" placeholder='Your Email' className='border border-gray-200 p-2 outline-none w-full' />
                    <br />
                    <input type="tel" placeholder='Your Number' className='border border-gray-200 p-2 outline-none w-full' />
                    <br />
                    <input type="Submit" value="Submit" className='my-custom-btn' />
                </form>
                <div className='flex-1'>
                    <img src={imgs} alt="" />
                </div>
          </div>
        </div>
    );
};

export default Contact;