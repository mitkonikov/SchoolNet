import React from 'react';
import { render } from '@testing-library/react';
import ArticleNotification from './../components/articleNotification';

test('renders basic info', () => {
    const data = {
        title: "Renders Title",
        content: "Some random content"
    }
    
    const { getByText } = render(<ArticleNotification data={data} />);
    const titleElement = getByText(data.title);
    const contentElement = getByText(data.content);
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
});