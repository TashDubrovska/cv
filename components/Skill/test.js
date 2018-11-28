import React from 'react';
import { shallow } from 'enzyme';
import Skill from '.';
import data from '../../data.json';

describe('Skill', () => {
    const skillData = data.skills.technical[2];
    let skill;

    beforeAll(() => {
        skill = shallow(<Skill name={skillData.name} additionalInfo={skillData.additionalInfo} level={skillData.level} />)
    });

    test('should render name', () => {
        expect(skill.find('h4').text()).toEqual(skillData.name);
    });

    test('should render level', () => {
        expect(skill.find('.skill__level').text()).toEqual(skillData.level);
    });

    test('should render additional information', () => {
        expect(skill.find('.skill__info').text()).toEqual(skillData.additionalInfo);
    });

});
