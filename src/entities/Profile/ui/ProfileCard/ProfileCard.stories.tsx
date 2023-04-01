import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;
const data = {
    age: 25,
    avatar: 'https://media.tenor.com/D5bFxOZk_S4AAAAC/patrick-star.gif',
    city: 'city',
    country: Country.RUS,
    currency: Currency.RUB,
    first: 'firstname',
    lastname: 'lastname',
    username: 'username',
};
export const Primary = Template.bind({});
Primary.args = {
    data,
};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    data,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Error = Template.bind({});
Error.args = {
    error: 'error',
};
export const ErrorDark = Template.bind({});
ErrorDark.args = {
    error: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = {
    isLoading: true,
};
IsLoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
