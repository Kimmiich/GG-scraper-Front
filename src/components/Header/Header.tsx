import { Search, Star } from 'react-feather';
import Image from 'next/image';
import imageLoader from '../../../imageLoader';
import Navbar from './Navbar/Navbar';
import Link from 'next/link';
import Button from '../_buttons/Button/Button';

function Header() {
  return (
    <header>
      <nav className={`nav`}>
        <div
          style={{
            position: 'absolute',
            left: '50%',
          }}
        >
          <Link href={'/'}>
            <a>
              <Image
                loader={imageLoader}
                unoptimized
                src={
                  'https://www.gamerguides.com/assets/front/images/logo/gg-logo.svg'
                }
                alt={'logo'}
                width="33"
                height="33"
              />
            </a>
          </Link>
        </div>

        <Button
          icon={<Search size={12} strokeWidth={4.5} />}
          href={'/go-premium'}
          type="solid"
        />
        <Button
          icon={
            <Star
              size={12}
              strokeWidth={4}
              stroke={'#D09400'}
              fill={'#D09400'}
            />
          }
          text="Go Premium"
          href={'/go-premium'}
          type="solid"
        />
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
