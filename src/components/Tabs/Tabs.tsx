import './Tabs.scss';

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
          <a href={`/navigator?tab=${index}`}>{tabObj.name}</a>
        </li>
      ))}
    </ul>
  );
}
