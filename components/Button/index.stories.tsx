import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MdAlarmAdd } from 'react-icons/md';
import Button from '.';

const icons = { 0: MdAlarmAdd, 1: null };

export default {
  title: 'Button',
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
        type: 'inline-radio',
        labels: {
          0: 'Oui',
          1: 'Non',
        },
      },
      defaultValue: null,
    },
    rightIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'inline-radio',
        labels: {
          0: 'Oui',
          1: 'Non',
        },
      },
      defaultValue: null,
    },
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <span>Button</span>
  </Button>
);

export const Text = Template.bind({});
Text.args = {};
