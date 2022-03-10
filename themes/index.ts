import { createStitches, globalCss } from '@stitches/react';
import colors from './colors';
import utils from './utils';

export const { theme: defaultTheme, styled } = createStitches({
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
    fontSizes: {},
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

export const globalStyles = globalCss({
  'html, body': {
    margin: 0,
  },
  'body, button': {
    fontFamily: '"Poppins", sans-serif',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '*': {
    boxSizing: 'border-box',
  },
});
