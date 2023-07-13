import { render, screen } from '@testing-library/react';
import Header from "../Header"

describe('Tests for Header Component', () => {
    test('Test whether h1 Tag is displayed', () => {
        render(<Header />);
        const linkElement = screen.getByText(/MyCart/i);
        expect(linkElement).toBeInTheDocument();
    })


});

describe('Nav Component', () => {
    test('renders without errors', () => {
      render(<Nav />);
      const navElement = screen.getByRole('navigation');
      expect(navElement).toBeInTheDocument();
    });
  
    test('renders the correct navigation items', () => {
      render(<Nav />);
  
      const homeLink = screen.getByText('Home');
      const contactLink = screen.getByText('Contact');
      expect(homeLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });
  });
