import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renderiza o link do site do TST', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Conheça o TST/i);
  expect(linkElement).toBeInTheDocument();
});
