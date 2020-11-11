import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { ResponsiveWrapper } from '.'
import ResponsiveIframe, { ResponsiveIframeProps } from './ResponsiveIframe'

export default {
  title: 'Chungking Core/Responsive Iframe',
  component: ResponsiveIframe
} as Meta<ResponsiveIframeProps>

export const Example: Story<ResponsiveIframeProps> = args => {
  return (
    <ResponsiveWrapper width="100%" maxWidth={500}>
      <ResponsiveIframe {...args} />
    </ResponsiveWrapper>
  )
}

Example.args = {
  src: 'https://www.youtube-nocookie.com/embed/P_mQpbCSQOo',
  frameBorder: 0,
  allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true
}
