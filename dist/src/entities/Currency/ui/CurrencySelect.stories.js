var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CurrencySelect } from './CurrencySelect';
export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(CurrencySelect, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
