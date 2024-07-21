// home.test.js
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import Home from '../src/components/home.js';

// Mocking axios module

jest.mock('axios');

test('fetches and displays user data', async () => {

  // Create a mock response
  const mockResponse = { data: { location: 'New Delhi', food: 'Omlette', place: 'Joint' } };
  axios.get.mockResolvedValue(mockResponse);
  
  // Render the User componen
  render(<Home />);

  // Check if the mocked response is used in the component
  const newName = await waitFor(() => screen.getByText(/New Delhi Omlette Joint/i));
  expect(newName).toBeInTheDocument();

});