import React from 'react';
import { Link } from 'react-router-dom';

function Paginate({ currentPage, totalPages, shopId }) {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section id="pagination" className="section-p1 pagination">
            <div className="pagination-links">
             <div>
                 {currentPage > 1 && (
                     <Link to={`/partner/slug/shop/${shopId}/page/${currentPage - 1}`}>
                         <i className="fas fa-long-arrow-alt-left"></i>
                     </Link>
                 )}
             </div>

                <div>
                    {pageNumbers.slice(0,20).map((page) => (
                        <Link
                            key={page}
                            to={`/partner/slug/shop/${shopId}/page/${page}`}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {page}
                        </Link>
                    ))}
                </div>

             <div>
                 { (
                     <Link to={`/partner/slug/shop/${shopId}/page/${currentPage + 1}`}>
                         <i className="fas fa-long-arrow-alt-right"></i>
                     </Link>
                 )}
             </div>
            </div>
        </section>
    );
}

export default Paginate;
