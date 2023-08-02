import { useEffect, useState } from 'react';

const useAxiosFetch = (callbackPromise, dependencyList) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    callbackPromise()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencyList);
  return { data, loading, error, setData };
};

export default useAxiosFetch;
