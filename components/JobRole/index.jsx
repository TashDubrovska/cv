import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'job-experience__job-role';

const JobRole = ({
  company, dates, role, description,
}) => (
  <li className={baseClassName}>
    <h3 className={`${baseClassName}__company`}>{company}</h3>
    <h4>Duration</h4>
    <p className={`${baseClassName}__duration`}>{dates}</p>
    <h4>Role</h4>
    <p className={`${baseClassName}__role`}>{role}</p>
    <h4>Description</h4>
    <p className={`${baseClassName}__description`}>{description}</p>
  </li>
);

JobRole.propTypes = {
  company: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default JobRole;
