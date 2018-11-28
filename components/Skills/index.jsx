import React from 'react';
import PropTypes from 'prop-types';
import Skill from '../Skill';

const Skills = ({ technical, personal }) => (
    <section>
        <h2>Skills</h2>
        <div className='technical'>
            <h3>Technical</h3>
            <ul>
                {
                    technical.map((skill, index) => (
                        <Skill key={index} name={skill.name} additionalInfo={skill.additionalInfo} level={skill.level} />
                    ))
                }
            </ul>
        </div>

        <div className='personal'>
            <h3>Personal</h3>
            <ul>
                {
                    personal.map((skill, index) => (
                        <Skill key={index} name={skill.name} additionalInfo={skill.additionalInfo} level={skill.level} />
                    ))
                }
            </ul>
        </div>
    </section>
);

Skills.propTypes = {
    technical: PropTypes.array.isRequired,
    personal: PropTypes.array.isRequired,
};

export default Skills;
