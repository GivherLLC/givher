import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GalleryImageGroup, ImageType } from '@/types/types';

export default async function getAllGalleryImages(): Promise<
  GalleryImageGroup[]
> {
  const galleryDirectory = path.join(process.cwd(), 'content/gallery');
  const fileNames = fs.readdirSync(galleryDirectory);

  const shuffleArray = <T>(array: T[]): T[] => {
    return array
      .map((item) => ({ ...item, sortKey: Math.random() })) // Add a random key
      .sort((a, b) => a.sortKey - b.sortKey) // Sort by random key
      .map(({ sortKey, ...item }) => item as T); // Explicitly cast back to T
  };

  const galleryImages = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(galleryDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Infer eventType from the file name
      let eventType: 'small' | 'medium' | 'large' | null = null;
      if (fileName.includes('small')) {
        eventType = 'small';
      } else if (fileName.includes('medium')) {
        eventType = 'medium';
      } else if (fileName.includes('large')) {
        eventType = 'large';
      }

      // Validate or cast data.images to ImageType[]
      const images: ImageType[] = Array.isArray(data.images)
        ? (data.images as ImageType[])
        : [];

      // Return each gallery group with randomized images
      return {
        eventType,
        images: shuffleArray(images), // Shuffle the images
      };
    })
  );

  return galleryImages;
}
