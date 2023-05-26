import { useLocation } from 'react-router-dom';
import { Tabs } from '../../components/Tabs/Tabs';
import Table from '../../components/Table/Table';
import { useData } from '../../hooks/useData';

function ListPage() {
  const location = useLocation();
  const tab = Number(new URLSearchParams(location.search).get('tab'));

  const rows = useData({ tab });

  if (rows.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Tabs tab={tab} />
      <Table rows={rows} />
    </div>
  );
}

export default ListPage;
