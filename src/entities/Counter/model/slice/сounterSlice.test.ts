import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './сounterSlice';

describe('сounterSlice', () => {
    test('test increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('test decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('should work with undefined', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
