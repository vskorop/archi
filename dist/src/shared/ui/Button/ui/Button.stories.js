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
import ExampleIcon from 'shared/assets/icons/day-sunny-svgrepo-com.svg';
import { Button, ButtonTheme } from './Button';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        square: { control: 'boolean' },
        hasIcon: { control: 'boolean' },
    },
};
var Template = function (args) {
    var hasIcon = args.hasIcon, children = args.children;
    return (_jsx(Button, __assign({}, args, { children: hasIcon ? _jsx(ExampleIcon, { height: 32, width: 32 }, void 0) : children }), void 0));
};
export var Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};
export var Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};
export var Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};
export var OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Disabled = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
