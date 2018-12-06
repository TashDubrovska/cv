import React from 'react';
import { shallow } from 'enzyme';
import JobRole from '.';
import data from '../../data.json';

const baseClassName = 'job-experience__job-role';

describe('JobRole', () => {
  let jobRole;
  const jobRoleData = data.work[0];

  beforeAll(() => {
    jobRole = shallow(<JobRole
      company={jobRoleData.company}
      dates={jobRoleData.dates}
      role={jobRoleData.role}
      description={jobRoleData.description}
    />);
  });

  test('should render company name', () => {
    expect(jobRole.find(`.${baseClassName}__company`).text()).toEqual(jobRoleData.company);
  });

  test('should render dates', () => {
    expect(jobRole.find(`.${baseClassName}__duration`).text()).toEqual(jobRoleData.dates);
  });

  test('should render role name', () => {
    expect(jobRole.find(`.${baseClassName}__role`).text()).toEqual(jobRoleData.role);
  });

  test('should render role description', () => {
    expect(jobRole.find(`.${baseClassName}__description`).text()).toEqual(jobRoleData.description);
  });
});
