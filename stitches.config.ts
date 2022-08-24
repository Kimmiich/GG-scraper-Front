import { createStitches, globalCss } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  media: {
    m: '(min-width: 768px)',
    l: '(min-width: 1200px)',
  },
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      coolBlue: '#123673',
      prettyInPink: '#E75971',
      almostBlack: '#333333',
      funkyOrange: '#F26350',
      moodyViolet: '#7D4772',
      darkerViolet: '#704572',
    },
    fontSizes: {
      s: '1rem',
      m: '1.125rem',
      l: '1.5rem',
    },
    space: {
      5: '0.3125rem',
      10: '0.625rem',
      20: '1.25rem',
      40: '2.5rem',
    },
  },
});

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: ' Roboto, sans-serif',
  },
});
