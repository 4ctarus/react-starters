import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MdAlarmAdd } from 'react-icons/md';
import Button from '../components/Button';
import HStack from '../components/HStack';
import { defaultTheme } from '../themes';

const icons = { MdAlarmAdd, null };


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    text: {
      control: false,
    },
    outlined: {
      control: false,
    },
    filled: {
      control: false,
    },
    elevated: {
      control: false,
    },
    css: {
      control: false,
    },
    leftIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          MdAlarmAdd: 'Oui',
          null: 'Non',
        },
      },
      defaultValue: null,
    },
    rightIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          MdAlarmAdd: 'Oui',
          null: 'Non',
        },
      },
      defaultValue: null,
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
