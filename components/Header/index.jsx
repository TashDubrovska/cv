import React from 'react';
import PropTypes from 'prop-types';
import Contacts from '../Contacts';

const baseClassName = 'header';

const Header = ({
  name, surname, whoiam, aboutMe, contacts,
}) => (
  <section className={baseClassName}>
    <Contacts contacts={contacts} />

    <h1 className={`${baseClassName}__name`}>
      {name}
      <span className={`${baseClassName}__name__highlight`}>{surname}</span>
    </h1>

    <h2 className="hide-a11y">Who I am</h2>
    <p className={`${baseClassName}__whoiam`}>{whoiam}</p>

    <h2 className="hide-a11y">About me</h2>
    {aboutMe.map((paragraph, index) => (
      <p key={index} className={`${baseClassName}__about-me`}>{paragraph}</p>
    ))}
  </section>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  whoiam: PropTypes.string.isRequired,
  contacts: PropTypes.object.isRequired,
  aboutMe: PropTypes.array.isRequired,
};

export default Header;
