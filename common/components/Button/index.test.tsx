import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from './';

test('Test button event', () => {
  const buttonText = 'Button label';
  let count = 0;

  const clickHandler = () => {
    count++;
  };

  const { rerender } = render(
    <Button data-testid="button" onClick={() => clickHandler()}>
      <span data-testid="button-content">{buttonText}</span>
    </Button>,
  );

  const button = screen.getByTestId('button');
  const buttonContent = screen.getByTestId('button-content');

  fireEvent.click(button);

  expect(button).not.toBeNull();
  expect(buttonContent).toHaveTextContent(buttonText);
  expect(count).toBe(1);
  expect(button).not.toBeDisabled();

  rerender(
    <Button data-testid="button" onClick={() => clickHandler()} disabled>
      <span data-testid="button-content">{buttonText}</span>
    </Button>,
  );

  fireEvent.click(button);

  expect(button).not.toBeNull();
  expect(buttonContent).toHaveTextContent(buttonText);
  expect(count).toBe(1);
  expect(button).toBeDisabled();
});
