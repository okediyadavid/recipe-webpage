import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthcontextProvider } from './context/AuthContext';
import App from './App';

// Create a mock QueryClient
const queryClient = new QueryClient();

test('renders Navbar', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <AuthcontextProvider>
        <App />
      </AuthcontextProvider>
    </QueryClientProvider>
  );

  // Check if Navbar is present
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});
