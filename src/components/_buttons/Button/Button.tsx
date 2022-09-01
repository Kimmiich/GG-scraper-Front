import Link from 'next/link';
import { ButtonProps } from './Button.types';
import { styled } from '../../../../stitches.config';
import React, { useState } from 'react';

const StyledButton = styled('button', {
  borderRadius: '4px',
  border: 'none',
  minWidth: 24,
  minHeight: 24,
  cursor: 'pointer',
  color: 'white',

  '& span': {
    paddingLeft: 6,
  },

  '& a': {
    color: '#ffffff',
    fontWeight: 'bold',
    textDecoration: 'none',
  },

  variants: {
    type: {
      solid: {
        padding: '4px 5px',
        backgroundColor: '$almostBlack',
        '&:hover': {
          backgroundColor: '$prettyInPink',
        },
        '& a': {
          fontSize: '14px',
        },
      },
      transparent: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.33)',
        fontWeight: 600,
        padding: '0.5em 1em',
        fontSize: '1rem',
        '&:hover': {
          backgroundColor: '#ffffff',
          '& a': {
            color: '#000000',
          },
        },
      },
    },
  },
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
        <a>{Elements(props)}</a>
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

export default Button;
