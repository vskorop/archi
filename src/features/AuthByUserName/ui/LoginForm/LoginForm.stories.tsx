import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <div style={{
        width: '200px',
        paddingLeft: '50px',
        paddingTop: '50px',
    }}
    >
        <LoginForm {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    value: 'value',
};

export const Dark = Template.bind({});
Dark.args = {
    value: 'value',

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
