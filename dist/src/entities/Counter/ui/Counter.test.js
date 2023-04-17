import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';
describe('Sidebar', function () {
    test('with only first param', function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('click increment', function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('click decrement', function () {
        componentRender(_jsx(Counter, {}, void 0), {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
