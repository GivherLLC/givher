import React from 'react';

import { lazy } from 'react';

import HeroVideo from './HeroVideo';
import FloatingLogos from './FloatingLogos';
import UpcomingEvents from './UpcomingEvents';
import AboutUs from './AboutUs';
import {
  EventType,
  ClientLogo,
  HomePageData,
  ClientImage,
} from '@/types/types';

type HomepageProps = {
  homepageInfo: HomePageData;
  events: EventType[];
  postponedEventText: string;
  clientLogos: ClientLogo[];
  eventCardImages: ClientImage;
};

const Services = lazy(() => import('./Services'));
const Testimonials = lazy(() => import('./Testimonials'));

export default function Homepage({
  homepageInfo,
  events,
  postponedEventText,
  clientLogos,
  eventCardImages,
}: HomepageProps) {
  const { video, services, featuredEvents, about, testimonialSection } =
    homepageInfo;

  const upcomingEvents = events.slice(0, 3);

  return (
    <>
      <HeroVideo data={video} />
      <FloatingLogos logos={clientLogos} />
      <Services services={services} />
      {!!upcomingEvents.length && (
        <UpcomingEvents
          title={featuredEvents.title}
          events={upcomingEvents}
          postponedEventText={postponedEventText}
          clientLogos={eventCardImages}
        />
      )}
      <AboutUs aboutInfo={about} />
      <Testimonials
        testimonials={testimonialSection.testimonials}
        testimonialsSectionTitle={testimonialSection.testimonialsSectionTitle}
      />
    </>
  );
}
