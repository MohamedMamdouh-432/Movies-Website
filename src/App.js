import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesList, NavBar } from "./elements/elements";
import { MovieDetailsView } from "./views/views";

const App = () =>
  <div className="font color-body">
    <NavBar />
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetailsView />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </div>

export default App;
