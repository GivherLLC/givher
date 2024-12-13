import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import { FooterData } from "@/types/types";

// Helper function to load the events page data
export default function getFooterData(): FooterData {
  const filePath = path.join(process.cwd(), "content/footer/footer.yml");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as FooterData;

  return data;
}
