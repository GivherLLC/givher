export interface EventsPageData {
  allEventsSectionTitle: string;
  comingSoonEventsSectionTitle: string;
  comingSoonEventsSectionSubtitle: string;
  postponedEventText: string;
  givherFeaturedEvent: FeaturedEventType;
}

export interface PastEventsPageData {
  pastEventsPageTitle: string;
  pastEventsPageSubtitle: string;
  featuredPastEvents: string[] | null;
}

export interface EventsPageProps {
  events: EventType[];
  inTheWorksEvents: EventType[];
  eventsPageData: EventsPageData;
  clientImagesObject: ClientImage;
}

export type EventDetailPageProps = {
  params: {
    eventSlugOrName: string;
  };
};

export type EventTypeData = {
  available: boolean;
  eventName: string;
  slug: string;
  firstDayOfEvent: string | null;
  eventTime: string | null;
  eventEndTime: string | null;
  lastDayOfEvent: string | null;
  timeOfYear: string | null;
  timeZone: string;
  eventType: string | null;
  eventAddress: string | null;
  eventCity: string | null;
  eventState: string | null;
  eventZipCode: string | null;
  eventLocation: string | null;
  clientName: string;
  eventButtonTextOne: string | null;
  eventButtonLinkOne: string | null;
  eventButtonTextTwo: string | null;
  eventButtonLinkTwo: string | null;
  eventDescriptionMarkdown: string | null;
  /**
   * @deprecated Use `eventDescriptionMarkdown` instead
   */
  eventDescription: EventDescriptionItem[] | null;
  /**
   * @deprecated Use `eventDescriptionMarkdown` instead
   */
  boldedEventInformation: BoldedEventInformationItem[] | null;
  detailImage: string | null;
  postponed: boolean;
  hideEvent: boolean;
};

export type EventType = {
  available: boolean;
  eventName: string;
  slug: string;
  firstDayOfEvent: string | null;
  displayDateFirst: string | null;
  eventTime: string | null;
  eventEndTime: string | null;
  lastDayOfEvent: string | null;
  displayDateLast: string | null;
  timeOfYear: string | null;
  timeZone: string;
  eventType: string | null;
  displayAddress: string | null;
  eventAddress: string | null;
  eventCity: string | null;
  eventState: string | null;
  eventZipCode: string | null;
  eventLocation: string | null;
  clientName: string;
  eventButtonTextOne: string | null;
  eventButtonLinkOne: string | null;
  eventButtonTextTwo: string | null;
  eventButtonLinkTwo: string | null;
  eventDescriptionMarkdown: string | null;
  /**
   * @deprecated Use `eventDescriptionMarkdown` instead
   */
  eventDescription: EventDescriptionItem[] | null;
  /**
   * @deprecated Use `eventDescriptionMarkdown` instead
   */
  boldedEventInformation: BoldedEventInformationItem[] | null;
  detailImage: string | null;
  postponed: boolean;
  hideEvent: boolean;
  eventStatus: 'event' | 'inTheWorks' | 'past';
};

type EventDescriptionItem = {
  paragraph: string;
};

type BoldedEventInformationItem = {
  line: string;
};

export type FeaturedEventType = {
  available: boolean;
  slug: string;
  eventName: string;
  eventCity: string | null;
  eventState: string | null;
  eventButtonTextOne: string | null;
  eventButtonLinkOne: string | null;
  clientImage: string;
  firstDayOfEvent: string | null;
  timeOfYear: string | null;
  lastDayOfEvent: string | null;
};

export interface ClientsPageData {
  clientsSectionTitle: string;
}

export type Client = {
  clientName: string;
  clientLogo: string;
  clientWebsite: string;
  clientW9Src: string;
  hideClient: boolean;
  eventLink: string;
};

export interface ClientImage {
  [key: string]: string;
}

export interface ClientLogo {
  clientLogo: string;
  logoAlt: string;
}

export interface ContactPageData {
  contactPageTitle: string;
  contactPageSubTitle1: string;
  contactPageSubTitle2: string;
  contactPhoneNumber: string;
  contactEmail: string;
}

export interface GalleryPageData {
  galleryTitle: string;
  gallerySubTitle: string;
}

export type TestimonialType = {
  quoteeName: string;
  quote: string;
  organization: string;
};

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
  testimonialSection: {
    testimonialsSectionTitle: string;
    testimonials: TestimonialType[];
  };
}

export interface ServiceCarouselCard {
  cardTitle: string;
  cardDescription: string;
  cardImageSrc: string;
  cardImageSrcDarkMode: string;
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

export interface GalleryImageGroup {
  eventType: GalleryEventType;
  images: ImageType[];
}

export type GalleryEventType = 'small' | 'medium' | 'large' | 'all' | null;

export interface ImageType {
  image: string;
}

export interface GalleryCopy {
  galleryTitle: string;
  gallerySubTitle: string;
}
