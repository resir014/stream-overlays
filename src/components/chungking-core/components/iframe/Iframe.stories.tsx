import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ResponsiveWrapper } from '../responsive-wrapper'
import Iframe, { IframeProps } from './Iframe'

export default {
  title: 'Chungking Core/Iframe',
  component: Iframe
} as Meta<IframeProps>

export const Example: Story<IframeProps> = (args) => {
  return (
    <ResponsiveWrapper width="100%" maxWidth={500}>
      <Iframe {...args} />
    </ResponsiveWrapper>
  )
}

Example.args = {
  src: 'https://www.youtube-nocookie.com/embed/P_mQpbCSQOo',
  frameBorder: 0,
  allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true
}
