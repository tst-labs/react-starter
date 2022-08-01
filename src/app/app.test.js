import React from 'react';
import { render } from '@testing-library/react';
import { ProvedorTemaTST } from '@tst-labs/basilar';

import App from './app';

test('renderiza o link do site do TST', () => {
  const { getByText } = render(
    <ProvedorTemaTST>
      <App />
    </ProvedorTemaTST>
  );
  const linkElement = getByText(/Conheça o TST/i);
  expect(linkElement).toBeInTheDocument();
});
