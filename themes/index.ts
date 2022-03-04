import { createStitches } from '@stitches/react';

function rgba(r: number, g: number, b: number, a: number) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const colors = {
  primary100: rgba(255, 255, 255, 1),
  primary99: rgba(254, 251, 255, 1),
  primary95: rgba(240, 239, 255, 1),
  primary90: rgba(223, 224, 255, 1),
  primary80: rgba(189, 194, 255, 1),
  primary70: rgba(156, 163, 255, 1),
  primary60: rgba(128, 135, 242, 1),
  primary50: rgba(102, 109, 213, 1),
  primary40: rgba(76, 83, 186, 1),
  primary30: rgba(51, 58, 161, 1),
  primary20: rgba(25, 30, 138, 1),
  primary10: rgba(0, 0, 111, 1),
  primary0: rgba(0, 0, 0, 1),

  secondary100: rgba(255, 255, 255, 1),
  secondary99: rgba(254, 251, 255, 1),
  secondary95: rgba(241, 239, 255, 1),
  secondary90: rgba(225, 224, 250, 1),
  secondary80: rgba(197, 196, 221, 1),
  secondary70: rgba(169, 169, 193, 1),
  secondary60: rgba(143, 143, 166, 1),
  secondary50: rgba(117, 117, 139, 1),
  secondary40: rgba(92, 93, 114, 1),
  secondary30: rgba(68, 69, 89, 1),
  secondary20: rgba(46, 47, 66, 1),
  secondary10: rgba(25, 26, 43, 1),
  secondary0: rgba(0, 0, 0, 1),

  tertiary100: rgba(255, 255, 255, 1),
  tertiary99: rgba(252, 252, 252, 1),
  tertiary95: rgba(255, 236, 246, 1),
  tertiary90: rgba(255, 215, 239, 1),
  tertiary80: rgba(232, 185, 213, 1),
  tertiary70: rgba(203, 158, 185, 1),
  tertiary60: rgba(175, 132, 158, 1),
  tertiary50: rgba(147, 107, 132, 1),
  tertiary40: rgba(121, 83, 107, 1),
  tertiary30: rgba(94, 60, 82, 1),
  tertiary20: rgba(69, 38, 59, 1),
  tertiary10: rgba(46, 17, 38, 1),
  tertiary0: rgba(0, 0, 0, 1),

  neutral100: rgba(255, 255, 255, 1),
  neutral99: rgba(255, 251, 255, 1),
  neutral95: rgba(243, 240, 245, 1),
  neutral90: rgba(228, 225, 230, 1),
  neutral80: rgba(200, 197, 202, 1),
  neutral70: rgba(172, 170, 174, 1),
  neutral60: rgba(146, 144, 148, 1),
  neutral50: rgba(120, 118, 122, 1),
  neutral40: rgba(95, 94, 98, 1),
  neutral30: rgba(71, 70, 73, 1),
  neutral20: rgba(49, 48, 52, 1),
  neutral10: rgba(27, 27, 31, 1),
  neutral0: rgba(0, 0, 0, 1),

  'neutral-variant100': rgba(255, 255, 255, 1),
  'neutral-variant99': rgba(254, 251, 255, 1),
  'neutral-variant95': rgba(242, 239, 251, 1),
  'neutral-variant90': rgba(228, 225, 236, 1),
  'neutral-variant80': rgba(199, 197, 208, 1),
  'neutral-variant70': rgba(172, 170, 180, 1),
  'neutral-variant60': rgba(145, 144, 154, 1),
  'neutral-variant50': rgba(119, 118, 128, 1),
  'neutral-variant40': rgba(94, 93, 103, 1),
  'neutral-variant30': rgba(70, 70, 79, 1),
  'neutral-variant20': rgba(48, 48, 56, 1),
  'neutral-variant10': rgba(27, 27, 34, 1),
  'neutral-variant0': rgba(0, 0, 0, 1),

  error100: rgba(255, 255, 255, 1),
  error99: rgba(252, 252, 252, 1),
  error95: rgba(255, 237, 233, 1),
  error90: rgba(255, 218, 212, 1),
  error80: rgba(255, 180, 169, 1),
  error70: rgba(255, 137, 122, 1),
  error60: rgba(255, 84, 73, 1),
  error50: rgba(221, 55, 48, 1),
  error40: rgba(186, 27, 27, 1),
  error30: rgba(147, 0, 6, 1),
  error20: rgba(104, 0, 3, 1),
  error10: rgba(65, 0, 1, 1),
  error0: rgba(0, 0, 0, 1),

  surface1:
    'linear-gradient(0deg, rgba(76, 83, 186, 0.05), rgba(76, 83, 186, 0.05)), #FFFBFF',
  surface2:
    'linear-gradient(0deg, rgba(76, 83, 186, 0.08), rgba(76, 83, 186, 0.08)), #FFFBFF',
  surface3:
    'linear-gradient(0deg, rgba(76, 83, 186, 0.11), rgba(76, 83, 186, 0.11)), #FFFBFF',
  surface4:
    'linear-gradient(0deg, rgba(76, 83, 186, 0.12), rgba(76, 83, 186, 0.12)), #FFFBFF',
  surface5:
    'linear-gradient(0deg, rgba(76, 83, 186, 0.14), rgba(76, 83, 186, 0.14)), #FFFBFF',
};

const { createTheme } = createStitches({
  theme: {
    colors,
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    },
    zIndices: {},
    transitions: {},
  },
});

export const defaultTheme = createTheme('dark-theme');
