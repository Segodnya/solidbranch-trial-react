import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import SummaryPage from './pages/SummaryPage';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Summary Page</Link>
            </li>
            <li>
              <Link to="/navigator">List Page</Link>
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
