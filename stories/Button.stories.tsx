import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MdAlarmAdd } from 'react-icons/md';
import Button from '../components/Button';
import HStack from '../components/HStack';
import { defaultTheme } from '../themes';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    text: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      control: {
        type: null,
      },
    },
    outlined: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      control: {
        type: null,
      },
    },
    filled: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      control: {
        type: null,
      },
    },
    elevated: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      control: {
        type: null,
      },
    },
    size: { options: ['normal', 'large'], defaultValue: 'normal' },
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <HStack className={defaultTheme}>
    <Button {...args}>
      <span>Button</span>
    </Button>

    <Button leftIcon={MdAlarmAdd} {...args}>
      <span>Button left icon</span>
    </Button>

    <Button rightIcon={MdAlarmAdd} {...args}>
      <span>Button right icon</span>
    </Button>

    <Button disabled {...args}>
      <span>Button</span>
    </Button>
  </HStack>
);

export const Text = Template.bind({});
Text.args = {
  text: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
};

export const Elevated = Template.bind({});
Elevated.args = {
  elevated: true,
};
