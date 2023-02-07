import { render, screen } from '@testing-library/react';

import Home from '../../pages';

jest.mock('next-auth/react', () => {
  return {
    useSession: () => [null, false]
  }
});

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn()
    })
  }
});

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home product={{ priceId: 'fake-price-id', amount: 'R$10,00' }} />)
    
    expect(screen.getByText(/R\$10,00/)).toBeInTheDocument();
  })
})