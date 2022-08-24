import React, { useState } from 'react';
import { MenuData } from '../Menu/MenuData';
import MenuItem from '../Menu/Menu';
import style from './Navbar.module.css';

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
      <div
        onClick={() => setNavActive(!navActive)}
        className={`${navActive ? style['active'] : ''} ${
          style['nav__menu-bar']
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${navActive ? 'active' : ''} nav__menu-list`}>
        {MenuData.map((menu, idx) => (
          <li
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <MenuItem active={activeIdx === idx} {...menu} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
