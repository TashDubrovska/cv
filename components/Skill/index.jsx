import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ name, additionalInfo, level }) => (
    <li className='skill'>
        <h4 className='skill__name'>{name}</h4>
        {additionalInfo && <p className='skill__info'>{additionalInfo}</p>}
        <p className='skill__level'>{level}</p>
    </li>
);

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    additionalInfo: PropTypes.string,
    level: PropTypes.string.isRequired,
};

export default Skill;
