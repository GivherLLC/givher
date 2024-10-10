import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { ComingSoonEventType } from "@/types/types";

async function getComingsoonEvents(): Promise<ComingSoonEventType[]> {
    const eventsDirectory = path.join(process.cwd(), 'content/coming-soon');

  // Check if the directory exists
  if (!fs.existsSync(eventsDirectory)) {
    console.warn("No 'coming soon events' directory found.");
    return []; // Return an empty array if the directory doesn't exist
  }

    const fileNames = fs.readdirSync(eventsDirectory);
  
    return fileNames.map((fileName) => {
      const filePath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
  
      return {
        eventName: data.eventName,
        firstDayOfEvent: data.firstDayOfEvent,
        lastDayOfEvent: data.lastDayOfEvent,
        timeOfYear: data.timeOfYear,
        timeZone: data.timeZone,
        eventCity: data.eventCity,
        clientName: data.clientName,
        eventButtonTextOne: data.eventButtonTextOne,
        eventButtonLinkOne: data.eventButtonLinkOne,
        eventButtonTextTwo: data.eventButtonTextTwo,
        eventButtonLinkTwo: data.eventButtonLinkTwo,
        postponed: data.postponed,
      };
    });
  }

export default getComingsoonEvents;