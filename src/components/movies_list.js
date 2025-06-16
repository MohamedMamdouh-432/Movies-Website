import { Row } from "react-bootstrap";
import { MovieCard, PaginationBar } from "../widgets/widgets";

const MoviesList = ({ movies, getPage, pageCount }) =>
  <Row className="mt-3">
    {movies.length >= 1 ? (movies.map((mov) => {
      return (<MovieCard key={mov.id} mov={mov} />)
    })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

    {movies.length >= 1 ? (<PaginationBar getPage={getPage} pageCount={pageCount} />) : null}

  </Row>

export default MoviesList;
