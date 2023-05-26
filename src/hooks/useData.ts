import { useEffect, useMemo, useState } from 'react';
import { TABS } from '../components/Tabs/Tabs';
import jsonData from '../assets/data.json';

type Row = {
  type: string;
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
};

type UseDataProps = {
  tab: number;
};

export function useData({ tab }: UseDataProps): Row[] {
  const data = jsonData.data;

  const filteredData = useMemo(() => {
    return data.filter((item) => item.type === TABS[tab].type);
  }, [data, tab]);

  const mappedData = useMemo(() => {
    return filteredData.map((item) => {
      return {
        type: item.type,
        _id: item._id,
        amount: Number(item.amount.split('(')[1].split(',')[0]),
        name: {
          first: item.name.first,
          last: item.name.last,
        },
      };
    });
  }, [filteredData]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (mappedData.length > 0) {
      setIsLoading(false);
    }
  }, [mappedData]);

  return isLoading ? [] : mappedData;
}

export default useData;
