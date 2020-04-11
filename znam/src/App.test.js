import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*

    ComponentDidMount()
         ----- TESTING -----
        setTimeout(() => {
            console.log("[Timeout Test]");
            let c = 30;
            let a = setInterval(() => {
                c -= 0.1;
                this.questionUI.current.updateStates({
                    timeLeft: c
                });

                if (Math.round(c) == 0) clearInterval(a);
            }, 100);
        }, 2000);*/

        /*setTimeout(() => {
            this.questionUI.current.markCorrect("4");
        }, 2000);

        setTimeout(() => {
            this.questionUI.current.applySkeleton();
        }, 4000);*/