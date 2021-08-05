import * as React from 'react'
import ChatAlternate from '~/components/icons/ChatAlternate'
import GitHub from '~/components/icons/GitHub'
import Globe from '~/components/icons/Globe'
import Twitter from '~/components/icons/Twitter'
import BottomBarSocialLinkItem from './components/BottomBarSocialLinkItem'

const socialLinks = [
  <BottomBarSocialLinkItem icon={Twitter} text="@resir014" />,
  <BottomBarSocialLinkItem icon={Globe} text="resir014.xyz" />,
  <BottomBarSocialLinkItem icon={GitHub} text="/resir014" />,
  <BottomBarSocialLinkItem icon={ChatAlternate} text="discord.gg/ws3P4wf" />
]

export default socialLinks
