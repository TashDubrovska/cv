import React from 'react';
import { shallow } from 'enzyme';
import Contacts from '.';
import data from '../../data.json';

describe('Contacts', () => {
  let contacts;

  beforeAll(() => {
    contacts = shallow(<Contacts contacts={data.contacts} />);
  });

  test('should render correct number of contact links', () => {
    expect(contacts.find('a')).toHaveLength(Object.keys(data.contacts).length);
  });

  describe('Contact link', () => {
    let contactLink;
    let contactLinkDataKey;

    beforeAll(() => {
      contactLink = contacts.find('a').at(0);
      [contactLinkDataKey] = Object.keys(data.contacts);
    });

    test('should render correct href', () => {
      expect(contactLink.prop('href')).toEqual(data.contacts[contactLinkDataKey]);
    });

    test('should generate correct image name', () => {
      expect(contactLink.find('img').prop('src')).toContain(`${contactLinkDataKey}.svg`);
    });

    test('should generate correct accessibility text', () => {
      expect(contactLink.find('span').text()).toEqual(`Contact me via ${contactLinkDataKey}`);
    });
  });
});
