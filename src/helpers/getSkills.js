import { collection, getDocs } from 'firebase/firestore';

import db from '../firebase';

export const getSkills = async () => {
  const querySnapshot = await getDocs(collection(db, 'skills'));
  const skills = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      data: doc.data(),
    };
  });

  return skills;
};
