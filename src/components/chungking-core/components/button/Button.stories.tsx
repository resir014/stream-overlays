import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button from './Button'
import { ButtonProps } from './types'

export default {
  title: 'Chungking Core/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    },
    disabled: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    }
  }
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'md',
  children: 'Push Me'
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary'
}

export const Danger = Template.bind({})
Danger.args = {
  ...Primary.args,
  variant: 'danger'
}
