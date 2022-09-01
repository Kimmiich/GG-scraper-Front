import { IMenuIcon } from './MenuIcon.types';
import { styled } from '../../ui/stitches.config';

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

//Maybe more of a button than icon??
export const MenuIcon = (props: IMenuIcon) => {
  return (
    <StyledMenuIcon active={props.active} onClick={props.setNavActive}>
      <span></span>
      <span></span>
      <span></span>
    </StyledMenuIcon>
  );
};
