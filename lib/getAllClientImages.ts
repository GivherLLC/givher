import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ClientImage } from "@/types/types";
  
  // Function to get all client images
export default  async function getAllClientImages(): Promise<ClientImage[]> {
    const clientDirectory = path.join(process.cwd(), 'content/clients');
      // Check if the directory exists
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
        [data.clientName]: data.clientLogo // Dynamically create the object with clientName as the key
      };
    });
  }