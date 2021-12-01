import { render, screen } from '@testing-library/react';
import App from './App';
import Todo from './Todo/Todo';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText("ADD YOUR TASK and DETAILS");
//   expect(linkElement).toBeInTheDocument();
// });

test('Correct Header is present', () => {
  render(<Todo/>);
  const textElement = screen.getByRole('h1',{name :'ADD YOUR TASK and DETAILS'});
  expect(textElement).toBeInTheDocument();
});

test('Button functionality check', () => {
  render(<Todo/>);
  const buttonCheck = screen.getByRole('button', {
    id: 'ADD'
  });
  expect(buttonCheck).toBeInTheDocument();
});

test('Button Visibilty', () => {
  render(<Todo/>);
  const buttonCheck = screen.getByRole('button', {
    id: 'ADD'
  });
  expect(buttonCheck).toBeInTheDocument();
});

test('Checking all the todo items to be present', () => {
  render(<Todo/>);
  const todoItem = screen.getByRole('item1', {
    text: 'TASK 1'
  });
  expect(todoItem).toBeInTheDocument();
});