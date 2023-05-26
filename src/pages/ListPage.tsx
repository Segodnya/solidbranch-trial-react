import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jsonData from '../data.json';

type Row = {
  type: string;
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
};

const TABS = [
  { name: 'Income', type: 'income' },
  { name: 'Outcome', type: 'outcome' },
  { name: 'Loan', type: 'loan' },
  { name: 'Investment', type: 'investment' },
];

function ListPage() {
  const location = useLocation();
  const tab = Number(new URLSearchParams(location.search).get('tab'));
  const [rows, setRows] = useState<Row[]>([]);
  const data = jsonData.data;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data.length > 0) {
      const mappedRows = data.map((item) => {
        return {
          type: item.type,
          _id: item._id,
          amount: Number(item.amount.split('(')[1].split(',')[0]),
          name: {
            first: item.name.first,
            last: item.name.last,
          },
          company: item.company,
          email: item.email,
          phone: item.phone,
          address: item.address,
        };
      });
      setRows(mappedRows.filter((row: Row) => row.type === TABS[tab].type));
      setIsLoading(false);
    }
  }, [tab, data]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>List Page</h1>
      <ul className="flex border-b">
        {TABS.map((tabObj, index) => (
          <li key={index} className={`"mr-1" ${tab === index ? 'border-l border-t border-r rounded-t text-blue-700' : 'border-b'}`}>
            <a className={`"inline-block" py-2 px-4 ${tab === index ? 'font-semibold' : 'font-normal'}`} href={`/navigator?tab=${index}`}>
              {tabObj.name}
            </a>
          </li>
        ))}
      </ul>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row._id}>
              <td className="border px-4 py-2">
                {row.name.first} {row.name.last}
              </td>
              <td className="border px-4 py-2">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;
