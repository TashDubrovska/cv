import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import data from '../../data.json';

const baseClassName = 'header';

describe('Header', () => {

    let header;

    beforeAll(() => {
        header = shallow(<Header name={data.name} surname={data.surname} whoiam={data.whoiam} aboutMe={data.aboutMe} email={data.email} />)
    });

    test('should render full name', () => {
        const nameElementText = header.find(`h1.${baseClassName}__name`).text();

        expect(nameElementText).toContain(data.name);
        expect(nameElementText).toContain(data.surname);
    });

    test('should render whoiam', () => {
        expect(header.find(`.${baseClassName}__whoiam`).text()).toEqual(data.whoiam);
    });

    test('should render about me pagagraphs', () => {
        const aboutMeElements = header.find(`.${baseClassName}__about-me`);

        expect(aboutMeElements).toHaveLength(data.aboutMe.length);
        aboutMeElements.forEach((element, index) => {
            expect(element.text()).toEqual(data.aboutMe[index]);
        });
    });

});
