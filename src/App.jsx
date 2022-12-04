import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:movieId" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
