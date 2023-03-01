import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shares/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <div style={{
        width: '200px',
        paddingLeft: '50px',
        paddingTop: '50px',
    }}
    >
        <Input {...args} />
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
