import { render, screen } from '@testing-library/react';
import AuthStatus from '../../src/components/AuthStatus';
import { mockAuthState } from '../utils';

describe('AuthStatus', () => {
  it('should render the loading message while fetching the auth status', () => {
    mockAuthState({
      isLoading: true,
      isAuthenticated: false,
      user: undefined,
    });

    render(<AuthStatus />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render the login button if the user is not authenticated', () => {
    mockAuthState({
      isLoading: false,
      isAuthenticated: false,
      user: undefined,
    });

    render(<AuthStatus />);

    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /log out/i })
    ).not.toBeInTheDocument();
  });

  it('should render the user name if authnticated', () => {
    mockAuthState({
      isLoading: false,
      isAuthenticated: true,
      user: { name: 'eric' },
    });

    render(<AuthStatus />);
    expect(screen.getByText(/eric/i)).toBeInTheDocument();
  });

  it('should render the log out button if authnticated', () => {
    mockAuthState({
      isLoading: false,
      isAuthenticated: true,
      user: { name: 'eric' },
    });

    render(<AuthStatus />);
    expect(
      screen.getByRole('button', { name: /log out/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /log in/i })
    ).not.toBeInTheDocument();
  });
});
