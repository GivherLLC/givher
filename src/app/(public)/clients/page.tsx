import React from "react";
import ClientsPage from "@/components/clients/ClientsPage";
import getAllClients from "../../../../lib/getAllClients";
import getClientsPageData from "../../../../lib/getClientsPageData";

export async function generateMetadata() {
  return {
    title: "Current and Past Clients | Givher",
    description:
      "Explore the list of organizations and advocacy groups that partner with Givher for fundraising and event development services.",
    openGraph: {
      title: "Current and Past Clients | Givher",
      description:
        "Explore the list of organizations and advocacy groups that partner with Givher for fundraising and event development services.",
      url: "/clients",
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

export default async function Clients() {
  const clients = await getAllClients();
  const clientsPageData = getClientsPageData();

  return <ClientsPage clients={clients} clientsPageData={clientsPageData} />;
}
