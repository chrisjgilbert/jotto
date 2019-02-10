import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats'
import { findByTestAttr }from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {

});

test('no text when `success` prop is false', () => {

});

test('renders non-empty congrats message when props is true', () => {

});