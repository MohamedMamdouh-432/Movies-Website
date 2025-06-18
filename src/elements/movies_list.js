import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard, PaginationBar } from "../components/components";
import { getAllMovies } from "../redux/thunks/movies_thunks";

const MoviesList = () => {
  const { movies, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await dispatch(getAllMovies());
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchMovies();
  }, [dispatch]);

  if (loading) return <div className="text-center p-5">جاري التحميل...</div>;
  if (error) return <div className="text-center p-5 text-danger">حدث خطأ: {error}</div>;

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => <MovieCard key={mov.id} mov={mov} />)
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام...</h2>
      )}
      {movies.length >= 1 && <PaginationBar />}
    </Row>
  );
}

export default MoviesList;