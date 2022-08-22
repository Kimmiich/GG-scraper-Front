import Link from 'next/link';
import React, { useState } from 'react';
import { NavItemData } from './NavItemData';

interface Props {
  text: string;
  href: string;
  icon: string;
  active: boolean;
}

const NavItem = ({ text, href, icon, active }: Props) => {
  return (
    <Link href={href}>
      <a className={`nav__item ${active ? 'active' : ''}`}>
        <span>{icon}</span>
        {text}
      </a>
    </Link>
  );
};

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <>
      <div
        onClick={() => setNavActive(!navActive)}
        className={`${navActive ? 'active' : ''} nav__menu-bar`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${navActive ? 'active' : ''} nav__menu-list`}>
        {NavItemData.map((menu, idx) => (
          <li
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
