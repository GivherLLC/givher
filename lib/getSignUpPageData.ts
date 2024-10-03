import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { SignUpForEmailsData } from '@/app/signup4emails/page';

// Helper function to load the events page data
export default function getSignUpForEmailsPageData(): SignUpForEmailsData {
  const filePath = path.join(process.cwd(), 'content/pages/signup_page.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as SignUpForEmailsData;

  return data;
}