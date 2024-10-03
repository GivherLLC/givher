export type EventType = {
    slug: string;
    eventName:string;
    firstDayOfEvent:string;
    eventTime: string | null;
    lastDayOfEvent:string | null;
    timeZone: string;
    eventCity:string;
    eventLocation: string | null;
    clientName:string;
    eventButtonTextOne: string;
    eventButtonLinkOne: string;
    eventButtonTextTwo: string | null;
    eventButtonLinkTwo: string | null;
    eventDescription:EventDescriptionItem[] | null;
    boldedEventInformation:BoldedEventInformationItem[] | null;
    detailImage:string;
    postponed: boolean;
}

export type UpcomingClientEventType = (EventType | ComingSoonEventType) & {
    comingSoon: boolean;
  };

type EventDescriptionItem = {
    paragraph: string;
};

type BoldedEventInformationItem = {
    line: string;
};

export type FeaturedEventType = {
    eventName: string;
    eventCity: string | null;
    eventButtonTextOne: string | null;
    eventButtonLinkOne: string | null;
    clientImage: string;
    firstDayOfEvent: string | null;
    timeOfYear: string | null;
    lastDayOfEvent:string | null;
    comingSoon: boolean;
}

export type ComingSoonEventType = {
    clientName:string;
    eventName:string;
    firstDayOfEvent:string | null;
    lastDayOfEvent:string | null;
    timeZone: string | null;
    timeOfYear: string | null;
    eventButtonTextOne: string | null;
    eventButtonLinkOne: string | null;
    eventButtonTextTwo: string | null;
    eventButtonLinkTwo: string | null;
    eventCity:string | null;
    postponed:boolean;
}

export type TestimonialType = {
    quoteeName: string;
    quote: string;
    organization: string;
}

export type Client = {
    clientName: string;
    clientLogo: string;
    clientWebsite: string;
    clientW9Src: string;
}

export interface ClientImage {
    [key: string]: string;
}

export interface ClientLogo {
    clientLogo: string;
    logoAlt: string;
}
