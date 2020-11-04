import React from 'react'
import { Story, Meta } from '@storybook/react'

import MessageBox, { MessageBoxProps } from './MessageBox'

export default {
  title: 'Chungking Core/MessageBox',
  component: MessageBox,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'warning']
      }
    },
    children: {
      control: 'text'
    }
  }
} as Meta<MessageBoxProps>

const Template: Story<MessageBoxProps> = (args) => <MessageBox {...args} />

export const Example = Template.bind({})
Example.args = {
  variant: 'default',
  children: 'This is an example message.'
}
