import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import ExperienceCard from './ExperienceCard';

// import { experienceData } from '../../data/experienceData';
import { useFetchExperience } from '../../hooks/useFetchExperience';

function Experience() {
  const { theme } = useContext(ThemeContext);

  const { data, loading } = useFetchExperience();

  return (
    <div className='experience' id='experience' style={{ backgroundColor: theme.secondary }}>
      <div className='experience-body'>
        <div className='experience-image'>
          <img src={theme.expimg} alt='' />
        </div>
        <div className='experience-description'>
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {loading ? 'Loading...' : ''}
          {/* {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))} */}
          {data.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.data.jobtitle}
              company={exp.data.company}
              startYear={exp.data.startYear}
              endYear={exp.data.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
