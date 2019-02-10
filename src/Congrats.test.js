import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats'
import { findByTestAttr } from '../test/testUtils';


Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  expect(congratsComponent.length).toBe(1);
});

// test('no text when `success` prop is false', () => {
//   const wrapper = setup({ success: false });
//   const congratsDisplay = findByTestAttr(wrapper, 'component-display');
//   expect(congratsDisplay.text()).toBe('');
// });
//
// test('renders non-empty congrats message when props is true', () => {
//   const wrapper = setup({ success: true });
//   const congratsDisplay = findByTestAttr(wrapper, 'component-display');
//   expect(congratsDisplay.text()).toContain('Congratulations!')
// });
