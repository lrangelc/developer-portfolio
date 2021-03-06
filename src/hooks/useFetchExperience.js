import { useEffect, useState } from 'react';

import { getExperience } from '../helpers/getExperience';

export const useFetchExperience = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getExperience().then((experience) => {
      experience.sort((a, b) => b.data.order - a.data.order);

      setState({
        data: experience,
        loading: false,
      });
    });
  }, []);

  return state;
};
