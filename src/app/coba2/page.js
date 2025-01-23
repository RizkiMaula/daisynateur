import Link from 'next/link';

export default function Coba2() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-2xl bg-blue-200">
      <h1>Halaman CSR</h1>
      <p>Ini halaman CSR</p>

      <Link
        className="text-xl hover:text-blue-500 btn"
        href="/"
      >
        halaman awal
      </Link>
    </div>
  );
}
