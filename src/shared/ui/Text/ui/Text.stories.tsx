import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (<Text {...args} />);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text',
};
export const Dark = Template.bind({});
Dark.args = {
    title: 'Title',
    text: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOnlyText = Template.bind({});
PrimaryOnlyText.args = {
    text: 'Text',
};

export const PrimaryOnlyTitle = Template.bind({});
PrimaryOnlyTitle.args = {
    title: 'Title',
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    text: 'Text',
    title: 'Title',
    theme: TextTheme.ERROR,
};

export const DarkError = Template.bind({});
DarkError.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,

};
DarkError.decorators = [ThemeDecorator(Theme.DARK)];
