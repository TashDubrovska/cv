import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Skills from '../Skills';
import WorkExperience from '../WorkExperience';
import Education from '../Education';

const App = ({ data }) => (
  <React.Fragment>
    <Header
      name={data.name}
      surname={data.surname}
      whoiam={data.whoiam}
      aboutMe={data.aboutMe}
      contacts={data.contacts}
    />
    <Skills skills={data.skills} />
    <WorkExperience work={data.work} />
    <Education education={data.education} />
  </React.Fragment>
);

App.propTypes = {
  data: PropTypes.object.isRequired,
};

export default App;
