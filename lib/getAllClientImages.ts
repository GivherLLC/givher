import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ClientImage } from "@/types/types";
  
  // Function to get all client images
export default  async function getAllClientImages(): Promise<ClientImage[]> {
    const eventsDirectory = path.join(process.cwd(), 'content/clients');
    const fileNames = fs.readdirSync(eventsDirectory);
  
    return fileNames.map((fileName) => {
      const filePath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
  
      return {
        [data.clientName]: data.eventsImage // Dynamically create the object with clientName as the key
      };
    });
  }