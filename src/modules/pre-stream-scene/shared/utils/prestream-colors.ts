import type { PreStreamVariants } from '~/@pre-stream/shared/types';

export function getPrestreamAccentColor(variant: PreStreamVariants = 'pre-stream') {
  switch (variant) {
    case 'pre-stream': {
      return {
        bg: 'bg-chungking-blue-500',
        border: 'border-chungking-blue-500',
      };
    }
    case 'brb': {
      return {
        bg: 'bg-chungking-green-500',
        border: 'border-chungking-green-500',
      };
    }
    case 'end': {
      return {
        bg: 'bg-chungking-orange-500',
        border: 'border-chungking-orange-500',
      };
    }
    case 'tech-issues': {
      return {
        bg: 'bg-chungking-magenta-500',
        border: 'border-chungking-magenta-500',
      };
    }
    default: {
      return {
        bg: 'bg-chungking-blue-500',
        border: 'border-chungking-blue-500',
      };
    }
  }
}
