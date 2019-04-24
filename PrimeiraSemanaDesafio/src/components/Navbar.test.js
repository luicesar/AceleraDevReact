import React from 'react';
import { mount, shallow } from 'enzyme';
import Navbar, { minProps } from './Navbar';

describe('Navbar', () => {
  test('Should be App', () => {
    const wrapper = mount(<Navbar />);
    expect(wrapper.is('Navbar')).toBeTruthy();
  });

  test('Should be input', () => {
    const wrapper = mount(<Navbar />);
    expect(wrapper.find('.form-group input').length).toEqual(1);
  });

  test('Should be img', () => {
    const wrapper = mount(<Navbar />);
    expect(wrapper.find('.navbar-brand img').length).toEqual(1);
  });

  test('Should be nav', () => {
    const wrapper = shallow(<Navbar {...minProps} />);
    expect(wrapper.length).toEqual(1);
  });
});