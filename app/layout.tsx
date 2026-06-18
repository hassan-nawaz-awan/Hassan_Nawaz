import type { Metadata, Viewport } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { LoadingScreen } from '@/components/loading-screen';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const calistoga = Calistoga({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hassan Nawaz | AI for Chemistry & Molecular Science',
  description:
    'Hassan Nawaz is an AI and Computational Chemistry researcher developing next-generation AI systems for molecular science, quantum chemistry, and scientific discovery.',
  keywords: [
    'Hassan Nawaz',
    'AI for Chemistry',
    'Computational Chemistry',
    'Quantum Machine Learning',
    'Molecular Simulation',
    'Scientific AI',
    'Machine Learning Potentials',
    'Xiamen University',
    'HKUST',
  ],
  authors: [{ name: 'Hassan Nawaz' }],
  creator: 'Hassan Nawaz',
  metadataBase: new URL('https://hassannawaz.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hassannawaz.com',
    siteName: 'Hassan Nawaz',
    title: 'Hassan Nawaz | AI for Chemistry & Molecular Science',
    description:
      'AI and Computational Chemistry researcher building next-generation AI systems for molecular science.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hassan Nawaz | AI for Chemistry',
    description: 'AI and Computational Chemistry researcher.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#061523' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${calistoga.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LoadingScreen />
          <ScrollProgress />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
