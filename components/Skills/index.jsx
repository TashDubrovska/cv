import React from 'react';
import PropTypes from 'prop-types';
import Skill from '../Skill';

const baseClassName = 'skills';

const Skills = ({ technical, personal }) => (
  <section className={baseClassName}>
    <h2 className={`${baseClassName}__heading`}>Skills</h2>
    <div className={`${baseClassName}__subsection technical`}>
      <h3 className={`${baseClassName}__subsection__heading`}>Technical</h3>
      <ul className={`${baseClassName}__subsection__list`}>
        {
          technical.map((skill, index) => (
            <Skill
              key={index}
              name={skill.name}
              additionalInfo={skill.additionalInfo}
              level={skill.level}
            />
          ))
        }
      </ul>
    </div>

    <div className={`${baseClassName}__subsection personal`}>
      <h3 className={`${baseClassName}__subsection__heading`}>Personal</h3>
      <ul className={`${baseClassName}__subsection__list`}>
        {
          personal.map((skill, index) => (
            <Skill
              key={index}
              name={skill.name}
              additionalInfo={skill.additionalInfo}
              level={skill.level}
            />
          ))
        }
      </ul>
    </div>
  </section>
);

Skills.propTypes = {
  technical: PropTypes.array.isRequired,
  personal: PropTypes.array.isRequired,
};

export default Skills;
