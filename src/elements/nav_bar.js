import { Container, Col, Row } from "react-bootstrap";
import logo from '../assets/images/logo.png';
import { searchMovies } from '../redux/thunks/movies_thunks';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchMovies(searchValue));
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue, dispatch]);

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
                value={searchValue}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;