import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4 flex justify-between text-xs md:text-sm">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xs md:text-2xl">
        <Link
          passHref
          target="_blank"
          href={'https://www.instagram.com/daisynateur'}
          className="md:text-2xl"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          passHref
          target="_blank"
          href={'https://x.com/daisynateur'}
          className="md:text-2xl"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
        <Link
          passHref
          target="_blank"
          href={'https://instagram.com/daisynateur'}
          className="md:text-2xl"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </Link>
      </nav>
    </footer>
  );
}
