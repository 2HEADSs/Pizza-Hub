
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('render Home link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});