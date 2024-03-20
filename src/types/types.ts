export type EventType = {
    clientName:string;
    eventName:string;
    eventDateString:string;
    firstDayOfEvent:string;
    eventDescription:string[];
    boldedEventInformation:string[]
    eventLocation:string;
    eventLocationTime:string | null;
    eventPdfLink:string;
    eventButtonText:string;
    eventButtonLink:string;
    detailImage:string;
}

export type FeaturedEventType = {
    eventName: string;
    eventLocation: string;
    eventDateString: string;
    eventButtonText: string;
    eventButtonLink: string;
    clientImage: string;
}

export type ComingSoonEventType = {
    clientName:string;
    eventName:string;
    eventButtonText:string;
    eventButtonLink:string;
    eventDateString:string;
    eventLocation:string;
}

export type TestimonialType = {
    quoteeName: string;
    quote: string;
    organization: string;
}