import * as React from 'react';
import { BottomBarSocialLinkItem } from './bottom-bar-social-link-item';
import ChatAlternate from '~/components/icons/ChatAlternate';
import GitHub from '~/components/icons/GitHub';
import Globe from '~/components/icons/Globe';
import Twitter from '~/components/icons/Twitter';

const socialLinks = [
  <BottomBarSocialLinkItem key="social-link-twitter" icon={Twitter} text="@resir014" />,
  <BottomBarSocialLinkItem key="social-link-web" icon={Globe} text="resir014.xyz" />,
  <BottomBarSocialLinkItem key="social-link-github" icon={GitHub} text="/resir014" />,
  <BottomBarSocialLinkItem
    key="social-link-discord"
    icon={ChatAlternate}
    text="discord.gg/ws3P4wf"
  />,
];

export default socialLinks;
