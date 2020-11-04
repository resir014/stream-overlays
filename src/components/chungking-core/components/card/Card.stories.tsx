import React from 'react'
import { Story, Meta } from '@storybook/react'

import { colors, space } from '../../utils'
import Card, { CardProps } from './Card'

export default {
  title: 'Chungking Core/Card',
  component: Card,
  argTypes: {
    elevation: {
      control: {
        type: 'select',
        options: ['single', 'double']
      }
    },
    p: {
      control: {
        type: 'select',
        options: Object.keys(space)
      }
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: Object.keys(colors)
      }
    },
    children: {
      control: 'text'
    }
  }
} as Meta<CardProps>

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Example = Template.bind({})
Example.args = {
  elevation: 'single',
  p: 'md',
  backgroundColor: 'grey.900',
  children: 'This is an example card content.'
}
