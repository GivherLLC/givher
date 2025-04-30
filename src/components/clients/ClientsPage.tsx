import React from 'react';
import AllClients from './AllClients';
import { Client } from '@/types/types';
import { ClientsPageData } from '@/types/types';

export default function ClientsPage({
  clients,
  clientsPageData,
}: {
  clients: Client[];
  clientsPageData: ClientsPageData;
}) {
  return (
    <AllClients
      clients={clients}
      clientsSectionTitle={clientsPageData.clientsSectionTitle}
    />
  );
}
