import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'skill';

const Skill = ({ name, additionalInfo, level }) => (
  <li className={baseClassName}>
    <h4 className={`${baseClassName}__name`}>{name}</h4>
    {additionalInfo.length > 0 && <p className={`${baseClassName}__info`}>{` (${additionalInfo})`}</p>}
    <p className={`${baseClassName}__level`}>
      <span className={`${baseClassName}__level__highlight`} style={{ width: `${Number(level) / 5 * 100}%` }} />
      <span className="hide-a11y">{`${level} of 5`}</span>
    </p>
  </li>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
  level: PropTypes.string.isRequired,
};

Skill.defaultProps = {
  additionalInfo: [],
};

export default Skill;
