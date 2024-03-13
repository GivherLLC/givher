export type EventType = {
    clientName:string;
    eventName:string;
    eventDateString:string;
    firstDayOfEvent:string;
    eventDescription:string[];
    boldedEventInformation:string[]
    eventLocation:string;
    eventLocationTime:string | null;
    eventPdfSrc:string | null;
    eventButtonName:string;
    eventButtonLink:string;
}

export type FeaturedEventType = {
    eventName: string;
    eventDate: string;
    eventLocation: string;
    eventButtonName: string;
    eventButtonLink: string;
    clientImage: string;
}