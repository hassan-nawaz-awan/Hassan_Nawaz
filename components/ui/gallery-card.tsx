'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryImage } from '@/types';

interface GalleryCardProps {
  image: GalleryImage;
  index: number;
}

export function GalleryCard({ image, index }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-[4/3] rounded-xl overflow-hidden glass-card"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-500 text-white mb-2">
          {image.category}
        </span>
        <p className="text-sm font-medium text-white">{image.alt}</p>
      </div>
    </motion.div>
  );
}
