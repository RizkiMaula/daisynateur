import Link from 'next/link';

// app/not-found.js
export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col gap-4 items-center justify-center"
      style={{ textAlign: 'center', marginTop: '50px' }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Sorry :( </p>
      <p>The page you are looking for does not exist.</p>
      <Link
        className="btn btn-primary"
        href="/"
      >
        Return to Home
      </Link>
    </div>
  );
}
