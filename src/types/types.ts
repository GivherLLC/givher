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
    eventButtonText:string;
    eventButtonLink:string;
    eventDescription:EventDescriptionItem[] | null;
    boldedEventInformation:BoldedEventInformationItem[] | null;
    eventLink:string;
    eventLinkText:string;
    detailImage:string;
    postponed: boolean;
}

type EventDescriptionItem = {
    paragraph: string;
};

type BoldedEventInformationItem = {
    line: string;
};

export type FeaturedEventType = {
    eventName: string;
    eventCity: string;
    firstDayOfEvent: string;
    lastDayOfEvent:string | null;
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
    eventCity:string;
    postponed:boolean;
}

export type TestimonialType = {
    quoteeName: string;
    quote: string;
    organization: string;
}

export type TeamMember = {
    name: string;
    title: string;
    imageSrc: string;
    iconLinks: {
        iconImageSrc: string;
        darkmodeSrc: string;
        iconImageAlt:string;
        iconLink: string;
    }[];
    bio: string[];
}

export type Client = {
    clientName: string;
    clientImageSrc: string;
    clientWebsite: string;
    clientW9Src: string;
}

export interface ClientImage {
    [key: string]: string;
}

export interface ClientLogo {
    logoSrc: string;
    logoAlt: string;
}
