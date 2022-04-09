import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsImage } from '../../utils/skillsImage';

// import { skillsData } from '../../data/skillsData';
import { useFetchSkills } from '../../hooks/useFetchSkills';

function Skills() {
  const { theme } = useContext(ThemeContext);

  const { data, loading } = useFetchSkills();

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className='skills' style={{ backgroundColor: theme.secondary }}>
      <div className='skillsHeader'>
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className='skillsContainer'>
        <div className='skill--scroll'>
          <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction='left'>
            {/* {skillsData.map((skill, id) => (
              <div className='skill--box' key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))} */}
            {loading ? 'Loading...' : ''}
            {data.map((skill) => (
              <div className='skill--box' key={skill.id} style={skillBoxStyle}>
                <img src={skillsImage(skill.data.name)} alt={skill.data.name} />
                <h3 style={{ color: theme.tertiary }}>{skill.data.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
