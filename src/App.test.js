import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome to city message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/welcome to/i);
  expect(welcomeMessage).toBeInTheDocument();
});
