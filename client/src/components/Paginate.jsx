import React from 'react';
import ReactPaginate from 'react-paginate';

function Paginate({ pageCount, onPageChange, currentPage }) {
    return (
    <div className="pagination-container">
    <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage}
    />
  </div>
  )
}
export default Paginate