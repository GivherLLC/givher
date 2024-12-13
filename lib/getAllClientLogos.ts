import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ClientLogo } from "@/types/types";

export default async function getAllClientLogos(): Promise<ClientLogo[]> {
  const clientDirectory = path.join(process.cwd(), "content/clients");
  const fileNames = fs.readdirSync(clientDirectory);

  return fileNames.map((fileName) => {
    const filePath = path.join(clientDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      clientLogo: data.clientLogo,
      logoAlt: data.clientName,
    };
  });
}
