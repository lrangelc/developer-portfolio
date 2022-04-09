import { collection, getDocs } from 'firebase/firestore';

import db from '../firebase';

export const getEducation = async () => {
  const querySnapshot = await getDocs(collection(db, 'education'));
  const education = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      data: doc.data(),
    };
  });

  return education;
};
