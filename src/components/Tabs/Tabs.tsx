import './Tabs.scss';
import { Link } from 'react-router-dom';

type Props = {
  tab: number;
};

export const TABS = [
  { name: 'Income', type: 'income' },
  { name: 'Outcome', type: 'outcome' },
  { name: 'Loan', type: 'loan' },
  { name: 'Investment', type: 'investment' },
];

export function Tabs({ tab }: Props) {
  return (
    <ul className="tabs">
      {TABS.map((tabObj, index) => (
        <li key={index} className={`${tab === index ? 'active' : ''}`}>
          {/* <a href={`/navigator?tab=${index}`}>{tabObj.name}</a> */}
          <Link to={`/navigator?tab=${index}`}>{tabObj.name}</Link>
        </li>
      ))}
    </ul>
  );
}
