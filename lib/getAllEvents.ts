import path from "path";
import fs from "fs";
import matter from "gray-matter";
import getEventNameParam from "@/utils/getEventNameParam";
import formatTimeTo12Hour from "@/utils/formatTime";

// Fetch all news articles (Markdown files)
async function getAllEvents() {
    const eventsDirectory = path.join(process.cwd(), 'content/events');
    const fileNames = fs.readdirSync(eventsDirectory);
  
    return fileNames.map((fileName) => {
      const filePath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
  
      return {
        slug: getEventNameParam(data.eventName),
        eventName: data.eventName,
        firstDayOfEvent: data.firstDayOfEvent,
        lastDayOfEvent: data.lastDayOfEvent,
        eventTime: formatTimeTo12Hour(data.eventTime),
        timeZone: data.timeZone,
        eventCity: data.eventCity,
        eventLocation: data.eventLocation,
        clientName: data.clientName,
        eventButtonText: data.eventButtonText,
        eventButtonLink: data.eventButtonLink,
        eventDescription: data.eventDescription,
        boldedEventInformation: data.boldedEventInformation,
        eventLinkText: data.eventLinkText,
        eventLink: data.eventLink,
        detailImage: data.detailImage,
        postponed: data.postponed,
      };
    });
  }

export default getAllEvents;