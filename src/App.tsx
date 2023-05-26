import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage/ListPage';
import SummaryPage from './pages/SummaryPage/SummaryPage';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="Links">
            <li>
              <Link className="Link" to="/">
                Summary Page
              </Link>
            </li>
            <li>
              <Link className="Link" to="/navigator">
                List Page
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/navigator" element={<ListPage />} />
          <Route path="/" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
