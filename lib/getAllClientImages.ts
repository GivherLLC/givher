import path from "path";
import fs from "fs";
import matter from "gray-matter";

// Function to get all client images and return an object with client names as keys
export default async function getAllClientImages(): Promise<
  Record<string, string>
> {
  const clientDirectory = path.join(process.cwd(), "content/clients");

  // Check if the directory exists
  if (!fs.existsSync(clientDirectory)) {
    console.warn("No 'clients' directory found.");
    return {}; // Return an empty object if the directory doesn't exist
  }

  const fileNames = fs.readdirSync(clientDirectory);

  return fileNames.reduce<Record<string, string>>((acc, fileName) => {
    const filePath = path.join(clientDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    // Add clientName as the key and clientLogo as the value
    acc[data.clientName] = data.clientLogo;
    return acc;
  }, {});
}
