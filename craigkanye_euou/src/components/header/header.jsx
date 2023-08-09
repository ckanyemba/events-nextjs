import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <nav>
            <ul>
              <li>
                <Link href="/" passHref legacyBehavior>
                  <a> EUOU</a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref legacyBehavior>
                  <a> EVENTS </a>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref legacyBehavior>
                  <a> NEWS </a>
                </Link>
              </li>
              <li>
                <Link href="/shop" passHref legacyBehavior>
                  <a> SHOP </a>
                </Link>
              </li>
              <li>
                <Link href="/cart" passHref legacyBehavior>
                  <a> CART </a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref legacyBehavior>
                  <a> CRAIG </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Unfolding Enigmatic Untold Odysseys - UEUO</p>
      </div>
    </header>
  );
};

