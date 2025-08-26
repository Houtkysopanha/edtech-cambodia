import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Register from '../../pages/Register';

// Mock framer-motion to avoid issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    input: ({ children, ...props }) => <input {...props}>{children}</input>,
  },
  AnimatePresence: ({ children }) => children,
}));

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Register Component', () => {
  test('renders without crashing', () => {
    renderWithRouter(<Register />);
    expect(screen.getByText('Register here')).toBeInTheDocument();
  });

  test('displays phone number input', () => {
    renderWithRouter(<Register />);
    expect(screen.getByPlaceholderText('000 000 000')).toBeInTheDocument();
  });

  test('displays country dropdown with Cambodia as default', () => {
    renderWithRouter(<Register />);
    expect(screen.getByText('+855')).toBeInTheDocument();
    expect(screen.getByText('🇰🇭')).toBeInTheDocument();
  });

  test('opens dropdown when clicked', async () => {
    renderWithRouter(<Register />);
    const dropdownButton = screen.getByRole('button', { name: /🇰🇭 \+855/i });
    fireEvent.click(dropdownButton);
    
    await waitFor(() => {
      expect(screen.getByText('United States')).toBeInTheDocument();
    });
  });

  test('allows phone number input', () => {
    renderWithRouter(<Register />);
    const phoneInput = screen.getByPlaceholderText('000 000 000');
    fireEvent.change(phoneInput, { target: { value: '123456789' } });
    expect(phoneInput.value).toBe('123456789');
  });

  test('displays submit button', () => {
    renderWithRouter(<Register />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('shows loading state when submitting', async () => {
    renderWithRouter(<Register />);
    const phoneInput = screen.getByPlaceholderText('000 000 000');
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    
    fireEvent.change(phoneInput, { target: { value: '123456789' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Submitting...')).toBeInTheDocument();
    });
  });

  test('displays powered by Sala section', () => {
    renderWithRouter(<Register />);
    expect(screen.getByText('Powered by')).toBeInTheDocument();
    expect(screen.getByText('Sala')).toBeInTheDocument();
  });
});
