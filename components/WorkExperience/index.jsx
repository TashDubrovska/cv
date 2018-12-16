import React from 'react';
import PropTypes from 'prop-types';
import JobRole from '../JobRole';

const WorkExperience = ({ work }) => (
  <section>
    <h2>Work experience</h2>
    <ul className="work-experience">
      {work.map(({ company, roles }, index) => (<JobRole
        key={index}
        company={company}
        roles={roles}
      />
      ))}
    </ul>
  </section>
);

WorkExperience.propTypes = {
  work: PropTypes.array.isRequired,
};

export default WorkExperience;
