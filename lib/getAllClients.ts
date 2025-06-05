import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Client } from '@/types/types';
import { getAllEvents } from './getAllEvents';
import { getReadyEvents, getPastEvents } from '@/utils/getEvents';

export default async function getAllClients(): Promise<Client[]> {
  const clientDirectory = path.join(process.cwd(), 'content/clients');
  const fileNames = fs.readdirSync(clientDirectory);

  const clients = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(clientDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Fetch events for this client
      const clientName = data.clientName;
      const allEvents = await getAllEvents();
      const currentEvents = getReadyEvents(allEvents);
      const pastEvents = getPastEvents(allEvents);

      // Determine the event link based on current or past events
      let eventLink = '';
      if (currentEvents.some((event) => event.clientName === clientName)) {
        eventLink = 'current';
      } else if (pastEvents.some((event) => event.clientName === clientName)) {
        eventLink = 'past';
      }

      return {
        clientName: data.clientName,
        clientLogo: data.clientLogo,
        clientWebsite: data.clientWebsite,
        clientW9Src: data.clientW9Src,
        hideClient: data.hideClient,
        pastClient: data.pastClient,
        eventLink, // Add the computed eventLink field
      };
    })
  );

  return clients;
}
