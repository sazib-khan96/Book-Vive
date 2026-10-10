import React from "react";

const Book = ({ book }) => {

    console.log(book)
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

  return (
    <div className="card bg-base-100  shadow-sm">
        
      <figure className="mt-5">
        <img className="w-30 shadow-2xl"
          src={image}
        />
      </figure>
      
      <div className="card-body">
        <div>
            <h4 className="text-blue-300 font-bold">{category}</h4>
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
      </div>
    </div>
  );
};

export default Book;
