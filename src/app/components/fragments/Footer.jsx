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
          passHref
          target="_blank"
          href={'https://instagram.com'}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          passHref
          target="_blank"
          href={'https://x.com'}
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
        <Link
          passHref
          target="_blank"
          href={'https://instagram.com'}
        >
          <FontAwesomeIcon icon={faTiktok} />
        </Link>
      </nav>
    </footer>
  );
}
