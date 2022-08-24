import Link from 'next/link';
import { MenuProps } from './Menu.types';

const MenuItem = ({ text, href, icon, active }: MenuProps) => {
  return (
    <Link href={href}>
      <a className={`nav__item ${active ? 'active' : ''}`}>
        <span>{icon}</span>
        {text}
      </a>
    </Link>
  );
};

export default MenuItem;
