import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { EventsPageData } from '@/app/events/page';

// Helper function to load the events page data
export default function getEventsPageData(): EventsPageData {
  const filePath = path.join(process.cwd(), 'content/pages/events_page.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as EventsPageData;

  return data;
}
