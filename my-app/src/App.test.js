import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './component/Dashboard';
import Display from "./component/Display";
import * as rtl from "@testing-library/react";


it('Rendered the Dashboard component', () => {
  
  const dash = rtl.render(<Dashboard/>)
  console.log(dash);
  
 
});

it('Rendered the Dashboard component', () => {
  
 const Dis =  rtl.render(<Display/>)
 
});

it('renders without crashing', () => {
  
  const Appy = rtl.render(<App />);
  
});

test('Ball count increases on click', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/Balls: 0/));

  rtl.fireEvent.click(wrapper.getByText(/^Increase Balls$/));
  
  expect(wrapper.getByText(/Balls: 1/));
});

test('Strike count increases on click', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/Strikes: 0/));

  rtl.fireEvent.click(wrapper.getByText(/^Increase Strikes$/));
  
  expect(wrapper.getByText(/Strikes: 1/));
});
