import Link from 'next/link';
import { ButtonProps } from './Button.types';
import { styled } from '../../../../stitches.config';
import React, { useState } from 'react';

const StyledButton = styled('button', {
  borderRadius: '4px',
  border: 'none',
  minWidth: 24,
  minHeight: 24,
  padding: '4px 5px',
  cursor: 'pointer',
  '& span': {
    paddingLeft: 6,
  },

  variants: {
    type: {
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

const Elements = (props: ButtonProps) => {
  if (props.icon && props.text) {
    return (
      <>
        {props.icon}
        <span>{props.text}</span>
      </>
    );
  } else if (props.icon && !props.text) {
    return props.icon;
  } else {
    return props.text;
  }
};

const Button = (props: ButtonProps) => {
  return (
    <StyledButton type={props.type}>
      <Link href={props.href}>
        <StyledLink>{Elements(props)}</StyledLink>
      </Link>
    </StyledButton>
  );
};

const StyledMenuIcon = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: 3,

  cursor: 'pointer',
  width: 30,
  height: 30,
  borderRadius: 4,
  '& span': {
    width: 17,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 99999,
    transformOrigin: '4px 0px',
    transition:
      'transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),background-color 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease',
  },
  '& span:nth-last-child(2)': {
    transformOrigin: '40% 100%',
  },
  variants: {
    active: {
      false: {
        backgroundColor: '$almostBlack',
      },
      true: {
        backgroundColor: '$prettyInPink',
        '& span': {
          opacity: 1,
          transform: 'rotate(-45deg) translate(2px, -1px)',
        },
        '& span:nth-last-child(2)': {
          transform: 'rotate(45deg) translate(-1px, -1px)',
        },
        '& span:nth-last-child(3)': {
          opacity: 0,
          transform: 'rotate(0deg) scale(0.2, 0.2)',
        },
      },
    },
  },
});

export const MenuIcon = () => {
  const [style, setStyle] = useState(false);

  const handleClick = () => {
    setStyle(!style);
    console.log(style);
  };
  return (
    <StyledMenuIcon active={style} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </StyledMenuIcon>
  );
};

export default Button;

// '&.active': {
//   backgroundColor: '$prettyInPink',
//   '& span': {
//     opacity: 1,
//     transform: 'rotate(45deg) translate(-1px, -1px)',
//   },
//   '& span:nth-last-child(2)': {
//     transform: 'rotate(45deg) translate(-1px, -1px)',
//   },
//   '& span:nth-last-child(3)': {
//     opacity: 0,
//     transform: 'rotate(0deg) scale(0.2, 0.2)',
//   },
// },
