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
                  <a> Events</a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref legacyBehavior>
                  <a> News</a>
                </Link>
              </li>
              <li>
                <Link href="/get-books" passHref legacyBehavior>
                  <a> Books</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref legacyBehavior>
                  <a> Craig</a>
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

