import { useMemo } from "react";
import eventsData from "../data/events.json";

const useCurrentEventsSorted = () => {
  const currentEvents = useMemo(() => {
    const currentDate = new Date();
    
    return eventsData.events
      .filter(event => {
        const eventDate = new Date(event.firstDayOfEvent);
        return (!event.postponed && eventDate >= currentDate) || event.postponed;
      })
      .sort((a, b) => {
        const timestampA = new Date(a.firstDayOfEvent).getTime();
        const timestampB = new Date(b.firstDayOfEvent).getTime();
        return timestampA - timestampB;
      });
  }, []);

  return currentEvents;
};

export default useCurrentEventsSorted;
