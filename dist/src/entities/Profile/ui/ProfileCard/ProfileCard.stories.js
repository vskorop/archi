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
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(ProfileCard, __assign({}, args), void 0); };
var data = {
    age: 25,
    avatar: 'https://media.tenor.com/D5bFxOZk_S4AAAAC/patrick-star.gif',
    city: 'city',
    country: Country.RUS,
    currency: Currency.RUB,
    first: 'firstname',
    lastname: 'lastname',
    username: 'username',
};
export var Primary = Template.bind({});
Primary.args = {
    data: data,
};
Primary.decorators = [StoreDecorator({})];
export var Dark = Template.bind({});
Dark.args = {
    data: data,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
export var Error = Template.bind({});
Error.args = {
    error: 'error',
};
export var ErrorDark = Template.bind({});
ErrorDark.args = {
    error: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
export var IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
export var IsLoadingDark = Template.bind({});
IsLoadingDark.args = {
    isLoading: true,
};
IsLoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
