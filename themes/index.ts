import { createStitches } from '@stitches/react';
import colors from './colors';
import utils from './utils';

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
    fonts: {},
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
  utils,
});

export const defaultTheme = createTheme('default-theme');
