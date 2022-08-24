import Link from 'next/link';
import { ButtonProps } from './Button.types';
import { styled } from '../../../../stitches.config';

const StyledButton = styled('button', {
  borderRadius: '4px',
  border: 'none',
  padding: '5px 10px',
  variants: {
    color: {
      solid: {
        backgroundColor: '$almostBlack',
        '&:hover': {
          backgroundColor: '$prettyInPink',
        },
      },
      transparent: {
        backgroundColor: 'rgba(0, 0, 0, .33)',
        '&:hover': {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

const StyledLink = styled('a', {
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: '14px',
});

const Button = ({ href, text, icon, color }: ButtonProps) => {
  return (
    <StyledButton color={color === 'solid' ? 'solid' : 'transparent'}>
      <Link href={href}>
        <StyledLink>{`${icon && <i />} ${text && text}`}</StyledLink>
      </Link>
    </StyledButton>
  );
};

export default Button;
