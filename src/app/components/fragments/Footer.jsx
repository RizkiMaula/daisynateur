import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4 flex justify-between">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
        <Link
          legacyBehavior
          target="_blank"
          href={'https://instagram.com'}
        >
          <a className="font-bold text-2xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Link>
        <Link
          legacyBehavior
          target="_blank"
          href={'https://x.com'}
        >
          <a className="font-bold text-2xl">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </Link>
        <Link
          legacyBehavior
          target="_blank"
          href={'https://instagram.com'}
        >
          <a className="font-bold text-2xl">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </Link>
      </nav>
    </footer>
  );
}
