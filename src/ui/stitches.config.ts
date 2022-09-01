import { createStitches, globalCss } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  media: {
    m: '(min-width: 768px)',
    l: '(min-width: 1200px)',
  },
  theme: {
    color: {
      basicLight: '#FFFFFF',
      basicDark: '#000000',
      coolBlue: '#123673',
      prettyInPink: '#E75971',
      almostBlack: '#333333',
      funkyOrange: '#F26350',
      moodyViolet: '#7D4772',
      darkerViolet: '#704572',
    },
    fontSize: {
      s: '1rem', // 16px
      m: '1.125rem', // 18px
      l: '1.5rem',
    },
    space: {
      5: '0.3125rem', // 5px
      10: '0.625rem', // 10px
      15: '0.9375rem', // 15px
      20: '1.25rem', // 20px
      40: '2.5rem', // 40px
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
  header: {
    position: 'sticky',
    zIndex: 30,
    top: 0,
    backgroundColor: '#000000',
  },
  nav: {
    display: 'flex',
    height: 60,
    padding: '0px 10px',
    justifyContent: 'right',
    gap: 10,
    alignItems: 'center',
  },
});
