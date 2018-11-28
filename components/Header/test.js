import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import data from '../../data.json';

describe('Header', () => {

    let header;

    beforeEach(() => {
        header = shallow(<Header name={data.name} whoiam={data.whoiam} email={data.email} />)
    });

    test('should render name', () => {
        expect(header.find('h1').text()).toEqual(data.name);
    });

    test('should render whoiam', () => {
        expect(header.find('.whoiam').text()).toEqual(data.whoiam);
    });

    test('should render email', () => {
        expect(header.find('.email').text()).toEqual(data.email);
    });

});
