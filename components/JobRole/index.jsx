import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'job-role';

const JobRole = ({
  company, dates, role, description,
}) => (
  <li className={baseClassName}>
    <div className={`${baseClassName}__heading`}>
      <h3 className={`${baseClassName}__heading__company`}>{company}</h3>
      <h4 className="hide-a11y">Role</h4>
      <p className={`${baseClassName}__heading__role`}>{role}</p>
      <h4 className="hide-a11y">Duration</h4>
      <p className={`${baseClassName}__heading__duration`}>{dates}</p>
    </div>
    <h4 className="hide-a11y">Description</h4>
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
