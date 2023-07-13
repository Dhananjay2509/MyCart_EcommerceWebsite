import { render, screen } from '@testing-library/react';
import AddToCart from "../AddToCart";

describe('AddToCart Component', () => {
    it('increases the amount when clicking increase button', () => {
      const { getByTestId } = render(<AddToCart />);
  
      const increaseButton = getByTestId('increase-button');
      fireEvent.click(increaseButton);
  
      const amountDisplay = getByTestId('amount-display');
      expect(amountDisplay.textContent).toBe('1');
    });
  
    it('decreases the amount when clicking decrease button', () => {
      const { getByTestId } = render(<AddToCart />);
  
      const increaseButton = getByTestId('increase-button');
      const decreaseButton = getByTestId('decrease-button');
  
      fireEvent.click(increaseButton); // Increase the amount to 1
      fireEvent.click(decreaseButton);
  
      const amountDisplay = getByTestId('amount-display');
      expect(amountDisplay.textContent).toBe('0');
    });
  
    it('does not decrease the amount when it is already 0', () => {
      const { getByTestId } = render(<AddToCart />);
  
      const decreaseButton = getByTestId('decrease-button');
      fireEvent.click(decreaseButton);
  
      const amountDisplay = getByTestId('amount-display');
      expect(amountDisplay.textContent).toBe('0');
    });
  });