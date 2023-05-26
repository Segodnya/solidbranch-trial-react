import './Table.scss';

type Row = {
  type: string;
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
};

type Props = {
  rows: Row[];
};

function Table({ rows }: Props) {
  return (
    <div className="table-container">
      <div className="table-row">
        <div className="table-cell">Name</div>
        <div className="table-cell">Amount</div>
      </div>
      {rows.map((row) => (
        <div className="table-row" key={row._id}>
          <div className="table-cell">
            {row.name.first} {row.name.last}
          </div>
          <div className="table-cell">{row.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default Table;
