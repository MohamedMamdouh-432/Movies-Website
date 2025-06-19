import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from "../redux/thunks/movies_thunks";

const MovieDetailsView = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movie, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(getMovieDetails(id));
    }, [id, dispatch]);

    if (loading) return <div className="text-center p-5">جاري التحميل...</div>;
    if (error) return <div className="text-center p-5 text-danger">حدث خطأ: {error}</div>;
    
    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4">
                    <div className="card-detalis d-flex align-items-center ">
                        {movie.poster_path && (
                            <img
                                className="img-movie w-30"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                onError={(e) => {
                                    e.target.src = 'path/to/default/image.jpg';
                                }}
                            />
                        )}
                        <div className="justify-content-center text-center mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم: {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين: {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم: {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">
                                {movie.overview || "لا يوجد وصف متاح"}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    {movie.homepage && (
                        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                            <button
                                style={{ backgroundColor: "#b45b35", border: "none" }}
                                className="btn btn-primary">
                                مشاهده الفيلم
                            </button>
                        </a>
                    )}
                </Col>
            </Row>
        </div>
    )
};

export default MovieDetailsView;