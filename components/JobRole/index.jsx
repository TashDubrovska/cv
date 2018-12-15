import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'job-role';

const JobRole = ({
  company, dates, role, description, responsibilitiesAndProjects,
}) => (
  <li className={baseClassName}>
    <div className={`${baseClassName}__heading`}>
      <h3 className={`${baseClassName}__heading__company`}>{company}</h3>
      <h4 className="hide-a11y">Role</h4>
      <p className={`${baseClassName}__heading__role`}>{role}</p>

      <h4 className="hide-a11y">Duration</h4>
      <p className={`${baseClassName}__heading__duration`}>{dates}</p>
    </div>
    {
      description && (
        <div>
          <h4 className="hide-a11y">Description</h4>
          <p className={`${baseClassName}__description`}>{description}</p>
        </div>
      )
    }

    {
        responsibilitiesAndProjects && (
          <div className={`${baseClassName}__responsibilities-and-projects`}>
            <h4 className="hide-a11y">Role responsibilities and projects</h4>
            {responsibilitiesAndProjects.description
              && <p className={`${baseClassName}__responsibilities-and-projects__description`}>{responsibilitiesAndProjects.description}</p>}
            <ul className={`${baseClassName}__responsibilities-and-projects__list`}>
              {responsibilitiesAndProjects.list.map((item, index) => (
                <li key={index} className={`${baseClassName}__responsibilities-and-projects__list__item`}>{item}</li>
              ))}
            </ul>
          </div>
        )
    }
  </li>
);

JobRole.propTypes = {
  company: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string,
  responsibilitiesAndProjects: PropTypes.shape({
    description: PropTypes.string,
    list: PropTypes.array.isRequired,
  }),
};

JobRole.defaultProps = {
  description: null,
  responsibilitiesAndProjects: null,
};

export default JobRole;
