import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from './';

test('Handle button click', () => {
  let count = 0;

  const clickHandler = () => {
    count++;
  };

  const { rerender } = render(
    <Button data-testid="button" onClick={() => clickHandler()}>
      <span data-testid="button-content">Button</span>
    </Button>,
  );

  const button = screen.getByTestId('button');
  const buttonContent = screen.getByTestId('button-content');

  fireEvent.click(button);

  expect(button).not.toBeNull();
  expect(buttonContent).toHaveTextContent('Button');
  expect(count).toBe(1);
  expect(button).not.toBeDisabled();

  rerender(
    <Button data-testid="button">
      <span data-testid="button-content">Button</span>
    </Button>,
  );

  fireEvent.click(button);

  expect(button).not.toBeNull();
  expect(buttonContent).toHaveTextContent('Button');
  expect(count).toBe(1);
  //   expect(button).toBeDisabled();
});
