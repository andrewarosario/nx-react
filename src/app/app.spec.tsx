import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import App from './app';

describe('App', () => {
  it('should render home page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homeText = getByText(/Home/i);
    expect(homeText).toBeTruthy();
  });

  it('should render product list page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/products']}>
        <App />
      </MemoryRouter>
    );

    const productListText = getByText(/Product List/i);
    expect(productListText).toBeTruthy();
  });

  it('should render orders page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/orders']}>
        <App />
      </MemoryRouter>
    );

    const ordersText = getByText(/Orders/i);
    expect(ordersText).toBeTruthy();
  });
});
