'use client';

import { galleryImages } from '@/data';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { GalleryCard } from '@/components/ui/gallery-card';

export function Gallery() {
  return (
    <Section id="gallery" background="muted">
      <SectionHeading
        title="Gallery"
        subtitle="Moments from conferences, research, and travels. Replace these placeholders with your own photos."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {galleryImages.map((image, index) => (
          <GalleryCard key={image.id} image={image} index={index} />
        ))}
      </div>
    </Section>
  );
}
