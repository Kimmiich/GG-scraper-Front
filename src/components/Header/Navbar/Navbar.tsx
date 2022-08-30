import React, { useState } from 'react';
import { MenuData } from '../Menu/MenuData';
import { MenuItem } from '../Menu/Menu';
import style from './Navbar.module.css';
import { MenuIcon } from '../../Icons/MenuIcon';
import { Menu } from '../Menu/Menu';

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  const followLink = (idx: any) => {
    setActiveIdx(idx);
    setNavActive(false);
  };

  return (
    <>
      <MenuIcon active={navActive} setNavActive={toggleMenu} />
      <Menu
        active={navActive}
        setNavActive={toggleMenu}
        activeIdx={activeIdx}
        setActiveIdx={followLink}
      />
    </>
  );
}

export default Navbar;
