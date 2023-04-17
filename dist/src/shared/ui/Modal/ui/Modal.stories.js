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
import { Modal } from 'shared/ui/Modal';
export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
};
var Template = function (args) { return _jsx(Modal, __assign({}, args), void 0); };
export var Default = Template.bind({});
Default.args = {
    children: 'Moda"Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
        + 'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    isOpen: true,
};
export var Dark = Template.bind({});
Dark.args = {
    children: 'Moda"Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
        + 'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
