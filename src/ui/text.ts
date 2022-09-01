import { styled } from './stitches.config';

export const Text = styled('p', {
  fontSize: '$s',
  color: '$basicDark',
  variants: {
    bg: {
      dark: {
        color: '$basicLight',
      },
      light: {
        color: '$basicDark',
      },
    },
  },
});
