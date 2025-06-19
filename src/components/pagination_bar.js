import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../redux/thunks/movies_thunks';

const PaginationBar = () => {
    const dispatch = useDispatch();
    const { pageCount, currentPage } = useSelector((state) => state.movies);
    
    const forcePageValue = currentPage ? currentPage - 1 : 0;

    const handlePageClick = (event) => {
        dispatch(getPage(event.selected + 1));
    }

    return (
        <ReactPaginate
            previousLabel="السابق"
            breakLabel="..."
            nextLabel="التالى"
            initialPage={0}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            forcePage={forcePageValue}
            onPageChange={handlePageClick}
            // styles
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            disableInitialCallback={true}
        />
    )
}

export default PaginationBar;