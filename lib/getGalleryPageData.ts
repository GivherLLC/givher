import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { GalleryPageData } from "@/types/types";

// Helper function to load the events page data
export default function getGalleryPageData(): GalleryPageData {
  const filePath = path.join(process.cwd(), "content/pages/gallery_page.yml");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as GalleryPageData;

  return data;
}
