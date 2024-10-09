import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function getAllClientLogos() {
    const clientDirectory = path.join(process.cwd(), 'content/clients');

    if (!fs.existsSync(clientDirectory)) {
      console.warn("No 'clients' directory found.");
      return []; // Return an empty array if the directory doesn't exist
    }
    
    const fileNames = fs.readdirSync(clientDirectory);

    return fileNames.map((fileName) => {
      const filePath = path.join(clientDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
  
      return {
        clientLogo: data.clientLogo,
        logoAlt: data.clientName,
      };
    });
  }