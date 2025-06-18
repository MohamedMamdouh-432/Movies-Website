import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../redux/thunks/movies_thunks';

const PaginationBar = () => {
    const dispatch = useDispatch();
    const { pageCount, loading } = useSelector((state) => state.movies);

    const handlePageClick = (data) => {
        if (!loading)
            dispatch(getPage(data.selected + 1));
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
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
            forcePage={0}
            disableInitialCallback={true}
        />
    )
}

export default PaginationBar;