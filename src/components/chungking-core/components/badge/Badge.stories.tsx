import React from 'react'
import { Story, Meta } from '@storybook/react'

import Badge, { BadgeProps } from './Badge'

export default {
  title: 'Chungking Core/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['grey', 'white']
      }
    }
  }
} as Meta<BadgeProps>

const Template: Story<BadgeProps> = (args) => <Badge {...args}>example</Badge>

export const Example = Template.bind({})
Example.args = {
  variant: 'grey'
}
