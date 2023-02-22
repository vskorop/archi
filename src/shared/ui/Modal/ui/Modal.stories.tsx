import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Moda"Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
        + 'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Moda"Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
        + 'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
    isOpen: true,

};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
