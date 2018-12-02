import React from 'react';
import PropTypes from 'prop-types';
import JobRole from '../JobRole';

const WorkExperience = ({ roles }) => (
    <section>
        <h2>Work experience</h2>
        <ul>
            {roles.map(role => (<JobRole company={role.company}
                                         dates={role.dates}
                                         role={role.role}
                                         description={role.description} />
            ))}
        </ul>
    </section>
);

WorkExperience.propType = {

}

export default WorkExperience;
