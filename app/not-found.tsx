import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy-950 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-navy-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-xl text-navy-600 dark:text-navy-300 mb-8">
          Page not found.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
