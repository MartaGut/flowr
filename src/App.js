
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flowers from './components/Flowers'
import LatestSightings from './components/LatestSightings';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Flowers />}></Route>
          <Route path="/latest-sightings" exact element={<LatestSightings />}></Route>
          <Route path="/favorites" exact element={<Favorites />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
