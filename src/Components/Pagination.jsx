import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center items-center gap-5">
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            className={`${
              currentPage === number ? 'bg-teal-900' : 'bg-zinc-900'
            } text-orange-500 font-medium px-4 py-2 mb-5`}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;