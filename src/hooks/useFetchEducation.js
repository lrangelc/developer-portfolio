import { useEffect, useState } from 'react';

import { getEducation } from '../helpers/getEducation';

export const useFetchEducation = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getEducation().then((education) => {
      setState({
        data: education,
        loading: false,
      });
    });
  }, []);

  return state;
};
