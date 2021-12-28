import { PreStreamVariants } from '~/lib/pre-stream/types';

export function getPrestreamAccentGradient(variant: PreStreamVariants) {
  switch (variant) {
    case 'pre-stream': {
      return 'from-[rgba(26,36,156,0.75)] to-[rgba(36,136,245,0.75)]';
    }
    case 'brb': {
      return 'from-[rgba(0,57,134,0.75)] to-[rgba(31,199,145,0.75)]';
    }
    case 'end': {
      return 'from-[rgba(134,0,0,0.75)] to-[rgba(203,137,29,0.75)]';
    }
    default: {
      return 'from-[rgba(26,36,156,0.75)] to-[rgba(36,136,245,0.75)]';
    }
  }
}

export function getPrestreamAccentColor(variant: PreStreamVariants = 'pre-stream') {
  switch (variant) {
    case 'pre-stream': {
      return 'bg-chungking-blue-500';
    }
    case 'brb': {
      return 'bg-chungking-green-500';
    }
    case 'end': {
      return 'bg-chungking-orange-500';
    }
    case 'nye': {
      return 'bg-chungking-turquoise-400';
    }
    default: {
      return 'bg-chungking-blue-500';
    }
  }
}
