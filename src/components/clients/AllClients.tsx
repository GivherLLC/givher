import React from 'react';
import ClientCard from './ClientCard';
import { Client } from '@/types/types';

type AllClientsProps = {
  clients: Client[];
  clientsSectionTitle: string;
};

export default function AllClients({
  clients,
  clientsSectionTitle,
}: AllClientsProps) {
  return (
    <div className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center">
      <div className="flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">
          {clientsSectionTitle}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] justify-center lg:justify-start">
          {clients
            .filter((c) => !c.hideClient)
            .map((c) => (
              <ClientCard key={c.clientName} clientInfo={c} />
            ))}
        </div>
      </div>
    </div>
  );
}
