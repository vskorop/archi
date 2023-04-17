import { classNames } from './classNames';
describe('classNames', function () {
    test('with one param', function () {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with two param', function () {
        var expected = 'someClass someSecondClass';
        expect(classNames('someClass', { someSecondClass: true })).toBe(expected);
    });
    test('with three param', function () {
        var expected = 'someClass class1 class2 hover isVisible hasScroll';
        expect(classNames('someClass', { hover: true, isVisible: true, hasScroll: true }, ['class1', 'class2'])).toBe(expected);
    });
    test('with one false param', function () {
        var expected = 'someClass class1 class2 hover hasScroll';
        expect(classNames('someClass', { hover: true, isVisible: false, hasScroll: true }, ['class1', 'class2'])).toBe(expected);
    });
    test('with one undefined param', function () {
        var expected = 'someClass class1 class2 hover';
        expect(classNames('someClass', { hover: true, isVisible: false, hasScroll: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});
