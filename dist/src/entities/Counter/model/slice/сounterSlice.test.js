import { counterReducer, counterActions } from './сounterSlice';
describe('сounterSlice', function () {
    test('test increment', function () {
        var state = { value: 10 };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('test decrement', function () {
        var state = { value: 10 };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('should work with undefined', function () {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
