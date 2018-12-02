import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import data from '../../data.json';

const baseClassName = 'header';

describe('Header', () => {

    let header;

    beforeAll(() => {
        header = shallow(<Header name={data.name} whoiam={data.whoiam} email={data.email} />)
    });

    test('should render name', () => {
        expect(header.find(`h1.${baseClassName}__name`).text()).toEqual(data.name);
    });

    test('should render whoiam', () => {
        expect(header.find(`.${baseClassName}__whoiam`).text()).toEqual(data.whoiam);
    });

    test('should render email link', () => {
        const emailElement = header.find(`.${baseClassName}__resources__link`);

        expect(emailElement.type()).toEqual('a');
        expect(emailElement.prop('href')).toContain(data.email);
    });

});
