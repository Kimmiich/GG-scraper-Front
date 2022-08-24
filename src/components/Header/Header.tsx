import Navbar from './Navbar/Navbar';
import Link from 'next/link';
import Button from '../_buttons/Button/Button';

function Header() {
  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/'}>
          <a>
            <h3 className="logo">Gamer Guides</h3>
          </a>
        </Link>
        <Button text="Search" href={'/go-premium'} color="solid" />
        <Button text="Go Premium" href={'/go-premium'} color="solid" />
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
