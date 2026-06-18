import { siteConfig, socialLinks } from '@/data';
import { Icon } from './icon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 dark:border-navy-800 bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-display font-bold text-navy-900 dark:text-white">
              {siteConfig.heroName}
            </p>
            <p className="mt-1 text-sm text-navy-500 dark:text-navy-400">
              Building AI for Scientific Discovery.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-navy-50 dark:bg-navy-900 text-navy-600 dark:text-navy-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label={link.name}
              >
                <Icon name={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-100 dark:border-navy-800 text-center">
          <p className="text-sm text-navy-500 dark:text-navy-400">
            © {currentYear} {siteConfig.heroName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
