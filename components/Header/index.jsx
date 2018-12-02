import React from 'react';
import PropTypes from 'prop-types';

const baseClassName = 'header';

const Header = ({ name, whoiam, email }) => (
    <section className={baseClassName}>
        <h1 className={`${baseClassName}__name`}>{name}</h1>
        <ul className={`${baseClassName}__resources`}>
            <li>
                <h2 className='hide-a11y'>Email</h2>
                <a href={`mailto:${email}`} className={`${baseClassName}__resources__link`}>
                    <svg enable-background="new 0 0 14 14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#FFF">
                            <path d="m7 9-1.732-1.516-4.952 4.245c.18.167.423.271.691.271h11.986c.267 0 .509-.104.688-.271l-4.949-4.245z"/>
                            <path d="m13.684 2.271c-.18-.168-.422-.271-.691-.271h-11.986c-.267 0-.509.104-.689.273l6.682 5.727z"/>
                            <path d="m0 2.878v8.308l4.833-4.107z"/>
                            <path d="m9.167 7.079 4.833 4.107v-8.311z"/>
                        </g>
                    </svg>
                    <span className='hide-a11y'>Email me</span>
                </a>
            </li>
        </ul>
        <h2 className='hide-a11y'>Who I am</h2>
        <p className={`${baseClassName}__whoiam`}>{whoiam}</p>
    </section>
);

Header.propTypes = {
    name: PropTypes.string.isRequired,
    whoiam: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Header;
