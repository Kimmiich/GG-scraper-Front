import Navbar from './Menu/Navbar';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/'}>
          <a>
            <h3 className="logo">Gamer Guides</h3>
          </a>
        </Link>
        <button>Search</button>
        <button>Go Premium</button>
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
