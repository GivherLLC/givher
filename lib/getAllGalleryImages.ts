import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GalleryImageGroup } from '@/types/types';

export default async function getAllGalleryImages(): Promise<GalleryImageGroup[]> {
  const galleryDirectory = path.join(process.cwd(), 'content/gallery');
  const fileNames = fs.readdirSync(galleryDirectory);

  const galleryImages = await Promise.all(fileNames.map(async (fileName) => {
    const filePath = path.join(galleryDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      galleryName: data.galleryName,
      clientName: data.clientName || null,
      eventType: data.eventType,
      images: data.images,
      hideImages: data.hideImages || false,
    };
  }));

  return galleryImages;
}