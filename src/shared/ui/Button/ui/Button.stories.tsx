import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    const { hasIcon, children } = args;
    return (
        <Button {...args}>
            {hasIcon ? <ExampleIcon height={32} width={32} /> : children}
        </Button>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
