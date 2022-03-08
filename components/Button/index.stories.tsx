import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MdAlarmAdd } from 'react-icons/md';
import Button, { ButtonColor, ButtonSize } from '.';
import { defaultTheme } from '../../themes';
import HStack from '../HStack';

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
    size: {
      options: Object.values(ButtonSize),
      control: {
        type: 'inline-radio',
        defaultValue: ButtonSize.NORMAL,
      },
      table: {
        defaultValue: { summary: ButtonSize.NORMAL },
      },
    },
    color: {
      options: Object.values(ButtonColor),
      control: {
        type: 'inline-radio',
        defaultValue: ButtonColor.PRIMARY,
      },
      table: {
        defaultValue: { summary: ButtonColor.PRIMARY },
      },
    },
    onClick: { action: 'onClick' },
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
