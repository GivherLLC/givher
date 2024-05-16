export type EventType = {
    clientName:string;
    eventName:string;
    eventDateString:string;
    firstDayOfEvent:string;
    eventDescription:string[];
    boldedEventInformation:string[]
    eventCity:string;
    eventLocation: string | null;
    eventLink:string;
    eventLinkText:string;
    eventButtonText:string;
    eventButtonLink:string;
    detailImage:string;
    postponed: boolean;
}

export type FeaturedEventType = {
    eventName: string;
    eventCity: string;
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
