import React from 'react';
import { shallow } from 'enzyme';
import JobRole from '.';
import data from '../../data.json';

const baseClassName = 'job-role';

describe('JobRole', () => {
  let jobRole;
  const jobRoleData = data.work[0];

  beforeAll(() => {
    jobRole = shallow(<JobRole
      company={jobRoleData.company}
      dates={jobRoleData.dates}
      role={jobRoleData.role}
      description={jobRoleData.description}
      responsibilitiesAndProjects={jobRoleData.responsibilitiesAndProjects}
    />);
  });

  test('should render company name', () => {
    expect(jobRole.find(`.${baseClassName}__heading__company`).text()).toEqual(jobRoleData.company);
  });

  test('should render dates', () => {
    expect(jobRole.find(`.${baseClassName}__heading__duration`).text()).toEqual(jobRoleData.dates);
  });

  test('should render role name', () => {
    expect(jobRole.find(`.${baseClassName}__heading__role`).text()).toEqual(jobRoleData.role);
  });

  test('should render role description', () => {
    expect(jobRole.find(`.${baseClassName}__description`).text()).toEqual(jobRoleData.description);
  });

  describe('Responsibilities and projects', () => {
    test('should be rendered if responsibilitiesAndProjects is provided in data', () => {
      expect(jobRole.find(`.${baseClassName}__responsibilities-and-projects`)).toBeTruthy();
    });

    test('should render description if it is provided', () => {
      expect(jobRole.find(`.${baseClassName}__responsibilities-and-projects__description`).text()).toEqual(jobRoleData.responsibilitiesAndProjects.description);
    });

    test('should render list of responsibilities and projects', () => {
      const listData = jobRoleData.responsibilitiesAndProjects.list;
      const responsibilitiesAndProjects = jobRole.find(`.${baseClassName}__responsibilities-and-projects__list__item`);
      expect(responsibilitiesAndProjects).toHaveLength(listData.length);
      responsibilitiesAndProjects.forEach((responsibility, index) => {
        expect(responsibility.text()).toEqual(listData[index]);
      });
    });
  });
});
