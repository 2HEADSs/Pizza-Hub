import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('render Home link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();
});