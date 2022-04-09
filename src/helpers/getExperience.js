import { collection, getDocs } from 'firebase/firestore';

import db from '../firebase';

export const getExperience = async () => {
  const querySnapshot = await getDocs(collection(db, 'experience'));
  const experience = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      data: doc.data(),
    };
  });

  return experience;
};
