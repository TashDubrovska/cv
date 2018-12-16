import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'job';

const JobRole = ({
  company, roles,
}) => (
  <li className={baseClassName}>
    <h3 className={`${baseClassName}__company`}>
      <img className={`${baseClassName}__company__image`} src={`./components/JobRole/images/${company.replace(/ /g, '')}.svg`} alt={company} />
    </h3>
    <ul className={`${baseClassName}__roles`}>
      {roles.map(({
        name, dates, description, responsibilitiesAndProjects,
      }, index) => (
        <li key={index} className={`${baseClassName}__roles__role`}>
          <h4 className="hide-a11y">Role</h4>
          <p className={`${baseClassName}__roles__role__name`}>{name}</p>

          <h5 className="hide-a11y">Duration</h5>
          <p className={`${baseClassName}__roles__role__duration`}>{dates}</p>

          {
            description && (
              <React.Fragment>
                <h5 className="hide-a11y">Description</h5>
                <p className={`${baseClassName}__roles__role__description`}>{description}</p>
              </React.Fragment>
            )
          }

          {
            responsibilitiesAndProjects && (
              <div className={`${baseClassName}__roles__role__responsibilities-and-projects`}>
                <h4 className="hide-a11y">Role responsibilities and projects</h4>
                {responsibilitiesAndProjects.description
                  && <p className={`${baseClassName}__roles__role__responsibilities-and-projects__description`}>{responsibilitiesAndProjects.description}</p>}
                <ul className={`${baseClassName}__roles__role__responsibilities-and-projects__list`}>
                  {responsibilitiesAndProjects.list.map((item, i) => (
                    <li key={i} className={`${baseClassName}__roles__role__responsibilities-and-projects__list__item`}>{item}</li>
                  ))}
                </ul>
              </div>)
          }
        </li>
      ))}
    </ul>
  </li>
);

JobRole.propTypes = {
  company: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.shape({
    dates: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    responsibilitiesAndProjects: PropTypes.shape({
      description: PropTypes.string,
      list: PropTypes.array.isRequired,
    }),
  })).isRequired,
};

export default JobRole;
