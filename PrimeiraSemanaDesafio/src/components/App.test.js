import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  test('Should be App', () => {
    const wrapper = mount(<App />);
    expect(wrapper.is('App')).toBeTruthy();
  });

  test('Should be state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('searchString')).toEqual('');
  });

  test('Should be Itens', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('recipes').length).toEqual(20);
  });
});