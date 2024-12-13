import React from "react";
import PastEventsPage from "@/components/past-events/PastEventsPage";
import getPastEventsPageData from "../../../../lib/getPastEventsPageData";
import {
  getPastEvents,
  getFeaturedOrRecentPastEvents,
} from "../../../../lib/getAllEvents";
import getAllClientImages from "../../../../lib/getAllClientImages";

export async function generateMetadata() {
  return {
    title: "Past Events | Givher",
    description: "Our journey so far at Givher.",
    openGraph: {
      title: "Past Events | Givher",
      description: "Our journey so far at Givher.",
      url: "/past-events",
      siteName: "Givher",
      type: "website",
      images: [
        {
          url: "https://www.givher.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Givher Political Hospitality",
        },
      ],
    },
  };
}

export default async function PastEvents() {
  const pageData = getPastEventsPageData();
  const [pastEvents, featuredPastEvents, clientLogos] = await Promise.all([
    getPastEvents(),
    getFeaturedOrRecentPastEvents(),
    getAllClientImages(),
  ]);

  return (
    <PastEventsPage
      pageData={pageData}
      pastEvents={pastEvents}
      featuredPastEvents={featuredPastEvents}
      clientLogos={clientLogos}
    />
  );
}
