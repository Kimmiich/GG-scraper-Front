import Link from 'next/link';
import { MenuProps, MenuItemProps } from './Menu.types';
import { MenuData } from './MenuData';
import { styled } from '../../../ui/stitches.config';

const StyledMenu = styled('ul', {
  listStyle: 'none',
  flexDirection: 'column',
  position: 'absolute',
  top: 60,
  right: 0,
  margin: 0,
  width: 200,
  bottom: 0,
  maxWidth: '85%',
  padding: 0,
  minHeight: 'calc(100vh - 60px)',
  backgroundColor: '#000000',
  color: 'white',
  fontWeight: 600,
  overflow: 'auto',
  transition: 'top .5s,right .2s,left .2s',

  variants: {
    active: {
      false: {
        display: 'none',
      },
      true: {
        display: 'flex',
      },
    },
  },
});

const StyledLink = styled('a', {
  padding: '0 1em',
  display: 'flex',
  textDecoration: 'none',
  alignItems: 'center',
  height: 40,
  cursor: 'pointer',
  borderLeftWidth: 4,
  borderLeftStyle: 'solid',
  borderLeftColor: 'transparent',
  variants: {
    active: {
      false: {
        color: 'grey',
        '&:hover': {
          color: 'white',
          borderLeftColor: '$prettyInPink',
        },
      },
      true: {
        color: '$prettyInPink',
      },
      alternative: {
        color: '#D09400',
        '& svg': { fill: '#D09400' },
      },
    },
  },
  '& svg': {
    flex: '0 0 50px',
  },
});

export const MenuItem = ({
  text,
  href,
  icon,
  setActiveIdx,
  active,
}: MenuItemProps) => {
  return (
    <li onClick={setActiveIdx}>
      <Link href={href}>
        <StyledLink active={text === 'Go Premium' ? 'alternative' : active}>
          {icon}
          <span>{text}</span>
        </StyledLink>
      </Link>
    </li>
  );
};

export const Menu = ({ active, setNavActive, activeIdx }: MenuProps) => {
  return (
    <>
      <StyledMenu active={active} onClick={setNavActive}>
        {MenuData.map((menu, idx) => (
          <MenuItem active={activeIdx === idx} {...menu} key={menu.text} />
        ))}
      </StyledMenu>
    </>
  );
};
