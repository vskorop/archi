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
import { Text, TextTheme } from './Text';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
        title: { control: 'boolean' },
        text: { control: 'boolean' },
    },
};
var Template = function (args) { return (_jsx(Text, __assign({}, args), void 0)); };
export var Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text',
};
export var Dark = Template.bind({});
Dark.args = {
    title: 'Title',
    text: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var PrimaryOnlyText = Template.bind({});
PrimaryOnlyText.args = {
    text: 'Text',
};
export var PrimaryOnlyTitle = Template.bind({});
PrimaryOnlyTitle.args = {
    title: 'Title',
};
export var PrimaryError = Template.bind({});
PrimaryError.args = {
    text: 'Text',
    title: 'Title',
    theme: TextTheme.ERROR,
};
export var DarkError = Template.bind({});
DarkError.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};
DarkError.decorators = [ThemeDecorator(Theme.DARK)];
