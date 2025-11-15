import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ToDo heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/ToDo/i);
  expect(headingElement).toBeInTheDocument();
});
