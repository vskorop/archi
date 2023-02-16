import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Btn',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Btn',
    theme: ThemeButton.themeSwitcherButton,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Btn',
    theme: ThemeButton.sideBarButton,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Btn',
    theme: ThemeButton.languageSwitcher,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
