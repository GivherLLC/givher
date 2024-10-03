export interface EventsPageData {
    allEventsSectionTitle: string;
    comingSoonEventsSectionTitle: string;
    postponedEventText: string;
    clientEventPageUpcomingEventsTitle: string;
    givherFeaturedEvent: FeaturedEventType;
    comingSoon?: ComingSoonEventType[]; // Optional array for coming soon events
  }
  
export interface EventsPageProps {
    events: EventType[];
    comingSoonEvents: ComingSoonEventType[];
    eventsPageData: EventsPageData;
    clientImagesObject: ClientImage;
  }

export type EventDetailPageProps = {
    params: {
      eventSlugOrName: string;
    };
  };

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

export interface ClientsPageData {
    clientsSectionTitle: string;
    testimonalsSectionTitle: string;
    testimonials: TestimonialType[];
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

export interface ContactPageData {
    contactPageTitle: string;
    contactPhoneNumber: string;
    contactEmail: string;
}

export interface HomePageData {
    video: {
      videoTitle: string;
      videoDescription: string;
      videoButtonText: string;
      videoButtonLink: string;
    };
    services: {
      servicesCarouselTitle: string;
      sevicesCarouselCards: ServiceCarouselCard[];
    };
    featuredEvents: {
      title: string;
    };
    about: {
      aboutTitle: string;
      aboutUsSections: AboutUsSection[];
    };
    eventCarousel: {
      eventCarouselTitle: string;
      eventCarouselImages: EventCarouselImage[];
    };
  }
  
  export interface ServiceCarouselCard {
    cardTitle: string;
    cardDescription: string;
    cardImageSrc: string;
    cardImageAlt: string;
    cardLinkText: string;
    cardLink: string;
  }
  
  export interface AboutUsSection {
    sectionTitle: string;
    sectionText: string;
    sectionImageSrc: string;
    sectionImageSrcDarkMode: string;
    sectionImageAlt: string;
  }
  
  export interface EventCarouselImage {
    imageSrc: string;
    imageAlt: string;
  }

  export interface TeamPageData {
    teamPageTitle: string;
    teamMembers: TeamMember[];
  }
  
  export interface TeamMember {
    name: string;
    title: string;
    imageSrc: string;
    iconLinks: IconLink[];
    bio: BioParagraph[];
  }
  
  export interface IconLink {
    iconImageSrc: string;
    darkmodeSrc: string;
    iconImageAlt: string;
    iconLink: string;
  }
  
  export interface BioParagraph {
    paragraph: string;
  }

  export interface SignUpForEmailsData {
    signupTitle: string;
    googleFormLink: string;
  }

  export interface FooterData {
    footerLogo: string;
    darkModeLogoSrc: string;
    iconLinks: IconLink[];
    buttonTitle: string;
    buttonText: string;
    buttonLink: string;
    pageLinks: PageLink[];
  }
  
  export interface IconLink {
    iconImageSrc: string;
    darkmodeSrc: string;
    imageAlt: string;
    iconLink: string;
  }
  
  export interface PageLink {
    linkText: string;
    link: string;
    external: boolean;
  }