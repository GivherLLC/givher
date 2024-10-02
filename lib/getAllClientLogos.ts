import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function getAllClientLogos() {
    const eventsDirectory = path.join(process.cwd(), 'content/clients');
    const fileNames = fs.readdirSync(eventsDirectory);
  
    return fileNames.map((fileName) => {
      const filePath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
  
      return {
        clientLogo: data.clientLogo,
        logoAlt: data.clientName,
      };
    });
  }