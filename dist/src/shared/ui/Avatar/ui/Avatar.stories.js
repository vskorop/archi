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
import { Avatar, AvatarTheme } from './Avatar';
export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: 'https://i.redd.it/h5yet8gu4w8y.jpg',
    },
};
var Template = function (args) { return (_jsx(Avatar, __assign({}, args), void 0)); };
export var PrimaryL = Template.bind({});
PrimaryL.args = {
    theme: AvatarTheme.L,
};
export var PrimaryM = Template.bind({});
PrimaryM.args = {
    theme: AvatarTheme.M,
};
export var PrimaryS = Template.bind({});
PrimaryS.args = {
    theme: AvatarTheme.S,
};
export var PrimaryDarkL = Template.bind({});
PrimaryDarkL.args = {
    theme: AvatarTheme.L,
};
PrimaryDarkL.decorators = [ThemeDecorator(Theme.DARK)];
export var PrimaryDarkM = Template.bind({});
PrimaryDarkM.args = {
    theme: AvatarTheme.M,
};
PrimaryDarkM.decorators = [ThemeDecorator(Theme.DARK)];
export var PrimaryDarkS = Template.bind({});
PrimaryDarkS.args = {
    theme: AvatarTheme.S,
};
PrimaryDarkS.decorators = [ThemeDecorator(Theme.DARK)];
