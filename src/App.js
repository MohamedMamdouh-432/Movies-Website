import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesList, NavBar } from "./components/components";
import { MovieDetailsView } from './views/views';
import { MoviesState } from "./hooks/movies_state";


function App() {
  const { movies, pageCount, getPage, search } = MoviesState();
  
  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />} />
            <Route path="/movie/:id" element={<MovieDetailsView />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
