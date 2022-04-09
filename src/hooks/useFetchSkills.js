import { useEffect, useState } from 'react';

import { getSkills } from '../helpers/getSkills';

export const useFetchSkills = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getSkills().then((skills) => {
      setState({
        data: skills,
        loading: false,
      });
    });
  }, []);

  return state;
};
