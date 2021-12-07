import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './app';

it('it can get the the method ', async () => {
    render(<App />);
    let method = screen.getByTestId('method');
    expect(method).toHaveTextContent('Request Method:');
});




