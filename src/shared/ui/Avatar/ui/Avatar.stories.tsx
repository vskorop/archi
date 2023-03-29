import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
    <Avatar {...args} />
);

export const PrimaryL = Template.bind({});
PrimaryL.args = {
    theme: AvatarTheme.L,
};

export const PrimaryM = Template.bind({});
PrimaryM.args = {
    theme: AvatarTheme.M,
};

export const PrimaryS = Template.bind({});
PrimaryS.args = {
    theme: AvatarTheme.S,
};

export const PrimaryDarkL = Template.bind({});
PrimaryDarkL.args = {
    theme: AvatarTheme.L,
};
PrimaryDarkL.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkM = Template.bind({});
PrimaryDarkM.args = {
    theme: AvatarTheme.M,
};
PrimaryDarkM.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkS = Template.bind({});
PrimaryDarkS.args = {
    theme: AvatarTheme.S,
};
PrimaryDarkS.decorators = [ThemeDecorator(Theme.DARK)];
