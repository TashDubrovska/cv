import React from 'react';
import PropTypes from 'prop-types';
import JobRole from '../JobRole';

const WorkExperience = ({ roles }) => (
  <section>
    <h2>Work experience</h2>
    <ul className="work-experience">
      {roles.map((role, index) => (<JobRole
        key={index}
        company={role.company}
        dates={role.dates}
        role={role.role}
        description={role.description}
        responsibilitiesAndProjects={role.responsibilitiesAndProjects}
      />
      ))}
    </ul>
  </section>
);

WorkExperience.propTypes = {
  roles: PropTypes.array.isRequired,
};

export default WorkExperience;
