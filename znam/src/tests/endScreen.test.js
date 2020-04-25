import React from 'react';
import { render, queryByAttribute  } from '@testing-library/react';
import EndScreen from './../components/endScreen';

const getById = queryByAttribute.bind(null, 'id');

test('empty end screen', () => {
    const data = {}
    const { getByText } = render(<EndScreen endScore={data} />);
});

test('basic data', async () => {
    const data = {
        score: 300
    }
    const screen = render(<EndScreen endScore={data} />);
    const scoreBlockCont = getById(screen.container, "score-block-container");
    expect(scoreBlockCont).toBeInTheDocument();

    const uElement1 = await screen.findByText("300");
    expect(uElement1).toBeInTheDocument();
});

test('scoreboard', async () => {
    const data = {
        score: 300,
        scoreboard: [{
            Rank: 1,
            Display_Name: "John Doe",
            Score: 500
        },
        {
            Rank: 2,
            Display_Name: "Jane Doe",
            Score: 400
        }]
    }
    const screen = render(<EndScreen endScore={data} />);
    const scoreBlockCont = getById(screen.container, "score-block-container");
    expect(scoreBlockCont).toBeInTheDocument();

    const uElement1 = await screen.findByText("300");
    expect(uElement1).toBeInTheDocument();

    const uElement2 = await screen.findByText("John Doe");
    expect(uElement2).toBeInTheDocument();

    const uElement3 = await screen.findByText("Jane Doe");
    expect(uElement3).toBeInTheDocument();
});