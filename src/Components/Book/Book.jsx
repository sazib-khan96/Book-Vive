import React from "react";
import { NavLink } from "react-router";

const Book = ({ book }) => {

  const {
    author,
    bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    yearOfPublishing,
   } = book;


   const byNowBtnHandle = (bookId) =>{
      console.log(bookId)
   }
  return (
    <div className="card bg-base-100  shadow-sm">
        
      <figure className="mt-5">
        <img className="w-30 shadow-2xl"
          src={image}
        />
      </figure>
      
      <div className="card-body">
        <div>
            <h4 className="text-blue-300 font-bold"> <span className="text-black">Category </span>: {category}</h4>
        </div>
        <h2 className="card-title">
          <h3>{bookName}</h3>
        </h2>
        <div>

        </div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline font-semibold">{author}</div>
          <div className="badge badge-outline">{yearOfPublishing}</div>
        </div>
        <div className="flex justify-between items-center">
            <button className="my-custom-btn">Buy Now </button>
            <NavLink to={`/books${bookId}`}>
                <button className="border border-gray-200 px-4 py-2 rounded-full shadow-2xl">Add To WishtList </button>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Book;
