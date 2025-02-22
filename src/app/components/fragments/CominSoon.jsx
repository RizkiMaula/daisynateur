import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4 text-2xl text-center">
      <h1 className="text-2xl md:text-5xl font-bold text-red-600">Kami Sedang Mengembangkan Halaman Ini</h1>
      <h2 className="text-sm md:text-2xl font-bold">Tunggu Kabar Selanjutnya Untuk Mendapatkan Informasi Lebih Lanjut</h2>
      <div className="flex gap-4">
        <Link
          target="_blank"
          href={'https://instagram.com/daisynateur'}
          className="hover:text-secondary hover:scale-110 hover:duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          target="_blank"
          href={'https://x.com/daisynateur'}
          className="hover:text-secondary hover:scale-110 hover:duration-300"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
        <Link
          target="_blank"
          href={'https://tiktok.com/daisynateur'}
          className="hover:text-secondary hover:scale-110 hover:duration-300"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </Link>
      </div>

      <Link
        className="hover:text-secondary hover:scale-110 hover:duration-300"
        href={'/'}
      >
        Kembali ke beranda
      </Link>
    </div>
  );
};
