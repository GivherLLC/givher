import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Client } from '@/types/types';

export default async function getAllClients(): Promise<Client[]> {
    const clientDirectory = path.join(process.cwd(), 'content/clients');
    const fileNames = fs.readdirSync(clientDirectory);
  
    return fileNames.map((fileName) => {
      const filePath = path.join(clientDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
  
      return {
        clientName: data.clientName,
        clientLogo: data.clientLogo,
        clientWebsite: data.clientWebsite,
        clientW9Src: data.clientW9Src,
        hideClient: data.hideClient,
      };
    });
  }