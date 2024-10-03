import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { HomePageData } from '@/app/page';

// Helper function to load the events page data
export default function getHomePageData(): HomePageData {
  const filePath = path.join(process.cwd(), 'content/pages/home_page.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as HomePageData;

  return data;
}