'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { siteConfig, socialLinks } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { ContactForm } from '@/components/ui/contact-form';
import { Icon } from '@/components/icon';

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Get in Touch"
        subtitle="Interested in collaboration, research opportunities, or just want to connect? Reach out."
      />

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-display font-bold text-navy-900 dark:text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
              I'm always open to discussing research collaborations, PhD opportunities,
              and the future of AI in scientific discovery.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-navy-500 dark:text-navy-400">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-navy-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-navy-500 dark:text-navy-400">Location</p>
                <p className="font-medium text-navy-900 dark:text-white">{siteConfig.location}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-navy-500 dark:text-navy-400 uppercase tracking-wider font-semibold mb-4">
              Find me on
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg glass-card text-navy-700 dark:text-navy-200 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Icon name={link.icon} className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
