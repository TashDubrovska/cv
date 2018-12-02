import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

const App =  ({ data }) => (
    <div>
        <Header name={data.name} whoiam={data.whoiam} email={data.email} />
        <Skills technical={data.skills.technical} personal={data.skills.personal} />
        <WorkExperience roles={data.work} />
    </div>
);

App.propTypes = {
    data: PropTypes.object.isRequired
};

export default App;