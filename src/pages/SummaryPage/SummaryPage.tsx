import { Link } from 'react-router-dom';
import jsonData from '../../assets/data.json';
import './SummaryPage.scss';

const SummaryPage = () => {
  const data = jsonData.data;
  const totalObjects = data.length;
  const incomeCount = data.filter((item) => item.type === 'income').length;
  const outcomeCount = data.filter((item) => item.type === 'outcome').length;
  const loanCount = data.filter((item) => item.type === 'loan').length;
  const investmentCount = data.filter((item) => item.type === 'investment').length;

  return (
    <div className="summary-page">
      <div className="card heading-card">
        <div className="card-body">
          <h5 className="card-title">Total Objects</h5>
          <p className="card-text">{totalObjects}</p>
        </div>
      </div>
      <div className="card income-card">
        <div className="card-body">
          <h5 className="card-title">Income</h5>
          <p className="card-text">{incomeCount}</p>
          <Link to="/navigator?tab=0" className="card-link">
            See all
          </Link>
        </div>
      </div>
      <div className="card outcome-card">
        <div className="card-body">
          <h5 className="card-title">Outcome</h5>
          <p className="card-text">{outcomeCount}</p>
          <Link to="/navigator?tab=1" className="card-link">
            See all
          </Link>
        </div>
      </div>
      <div className="card loan-card">
        <div className="card-body">
          <h5 className="card-title">Loan</h5>
          <p className="card-text">{loanCount}</p>
          <Link to="/navigator?tab=2" className="card-link">
            See all
          </Link>
        </div>
      </div>
      <div className="card investment-card">
        <div className="card-body">
          <h5 className="card-title">Investment</h5>
          <p className="card-text">{investmentCount}</p>
          <Link to="/navigator?tab=3" className="card-link">
            See all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
