import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCountValue/getCounterValue';
import { counterActions } from '../model/slice/сounterSlice';

interface CounterProps {
    className?: string;
}

export const Counter = (props: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-button"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={() => increment()}
                /* eslint-disable-next-line i18next/no-literal-string */
            >
                increment
            </Button>
            <Button
                data-testid="decrement-button"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={() => decrement()}
                /* eslint-disable-next-line i18next/no-literal-string */
            >
                decrement
            </Button>
        </div>
    );
};
