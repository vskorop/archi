import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'twitter',
        list: [
            { name: 'default', class: ['app', 'default'], color: '#393232' },
            { name: 'dark', class: ['app', 'dark'], color: '#e1e5ea' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.DEFAULT));
addDecorator(RouterDecorator);
addDecorator(withThemes);
