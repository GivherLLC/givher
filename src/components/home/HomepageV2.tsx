'use client';
import React, { lazy } from 'react';

import HeroVideo from './HeroVideo';
import FloatingLogos from './FloatingLogos';
import UpcomingEvents from './UpcomingEvents';
import AboutUs from './AboutUs';
import {
  EventTypeWithDisplayInfo,
  ClientLogo,
  HomePageData,
  ClientImage,
} from '@/types/types';
import { getNonPastEvents } from '@/utils/getEvents';

type HomepageProps = {
  homepageInfo: HomePageData;
  events: EventTypeWithDisplayInfo[];
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

  const nonPastEvents = getNonPastEvents(events);
  const upcomingEvents = nonPastEvents.slice(0, 3);

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
