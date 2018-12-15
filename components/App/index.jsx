import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Skills from '../Skills';
import WorkExperience from '../WorkExperience';

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
    <WorkExperience roles={data.work} />
  </React.Fragment>
);

App.propTypes = {
  data: PropTypes.object.isRequired,
};

export default App;
