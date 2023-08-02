import { useEffect } from 'react';

const useScrollTop = (item, dependencyList) => {
  useEffect(() => {
    item?.scroll({ top: 0, behavior: 'smooth' });
  }, dependencyList);
};

export default useScrollTop;
