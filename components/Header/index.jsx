import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name, whoiam, email }) => (
    <div>
        <h1>{name}</h1>
        <p className='whoiam'>{whoiam}</p>
        <h2>Email:</h2>
        <p className='email'>{email}</p>
    </div>
);

Header.propTypes = {
    name: PropTypes.string.isRequired,
    whoiam: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Header;
