import React from 'react'
import { Story, Meta } from '@storybook/react'

import AnchorButton from './AnchorButton'
import { AnchorButtonProps } from './types'

export default {
  title: 'Chungking Core/AnchorButton',
  component: AnchorButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    },
    children: {
      control: 'text'
    },
    href: {
      control: 'text'
    }
  }
} as Meta<AnchorButtonProps>

const Template: Story<AnchorButtonProps> = (args) => <AnchorButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'md',
  children: 'Push Me',
  href: 'https://open.spotify.com/track/09j3qGyo1dt3i7iINMctj0',
  target: '_blank'
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
