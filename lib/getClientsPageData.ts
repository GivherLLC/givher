import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { ClientsPageData } from '@/types/types';

// Helper function to load the events page data
export default function getClientsPageData(): ClientsPageData {
  const filePath = path.join(process.cwd(), 'content/pages/client_page.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as ClientsPageData;

  return data;
}
