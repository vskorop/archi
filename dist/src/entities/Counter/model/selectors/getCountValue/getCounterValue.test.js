import { getCounterValue } from './getCounterValue';
describe('getCounterValue test', function () {
    test('test 1', function () {
        var state = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});
