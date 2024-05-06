import { Inter as interFactory, JetBrains_Mono as jetBrainsMonoFactory } from 'next/font/google';

export const inter = interFactory({
  weight: 'variable',
  subsets: ['latin-ext'],
  variable: '--font-inter',
});

export const jetBrainsMono = jetBrainsMonoFactory({
  weight: 'variable',
  subsets: ['latin-ext'],
  variable: '--font-jetbrains-mono',
});
