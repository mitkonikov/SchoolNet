import React from 'react';
import { render } from '@testing-library/react';
import Block from './../components/block';

test('renders basic info', () => {
    const title = "Contributions";
    const number = "67";
    const { getByText } = render(<Block title={title} number={number} />);
    const titleElement = getByText(title);
    const numberElement = getByText(number);
    expect(titleElement).toBeInTheDocument();
    expect(numberElement).toBeInTheDocument();
});