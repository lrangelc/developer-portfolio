import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css';

import EducationCard from './EducationCard';

// import { educationData } from '../../data/educationData';
import { useFetchEducation } from '../../hooks/useFetchEducation';

function Education() {
  const { theme } = useContext(ThemeContext);

  const { data, loading } = useFetchEducation();

  return (
    <div className='education' id='resume' style={{ backgroundColor: theme.secondary }}>
      <div className='education-body'>
        <div className='education-description'>
          <h1 style={{ color: theme.primary }}>Education</h1>
          {loading ? 'Loading...' : ''}
          {/* {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))} */}
          {data.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.data.institution}
              course={edu.data.course}
              startYear={edu.data.startYear}
              endYear={edu.data.endYear}
            />
          ))}
        </div>
        <div className='education-image'>
          <img src={theme.eduimg} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Education;
