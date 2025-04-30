import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowLink from '../common/ArrowLink';
import { Client } from '@/types/types';

type ClientCardProps = {
  clientInfo: Client;
};

export default function ClientCard({ clientInfo }: ClientCardProps) {
  const {
    clientName,
    clientLogo,
    clientWebsite,
    clientW9Src,
    eventLink,
    pastClient,
  } = clientInfo;
  return (
    <div className="group relative">
      {!!pastClient && (
        <div className="bg-electricYellow text-navySmoke font-visbyBold shadow-custom-shadow-small text-[12px] px-3 py-1 w-fit rounded-2xl absolute right-[-3px] top-[-13px] z-20">
          Past Client
        </div>
      )}
      <div className="relative bg-white rounded-xl shadow-custom-shadow-clients dark:shadow-custom-shadow-darkmode flex items-center justify-center w-[280px] h-[175px]">
        <Image
          priority={true}
          src={clientLogo}
          alt={`${clientName} logo`}
          width={280}
          height={175}
          className="rounded-xl max-w-[250px] w-auto max-h-[150px] h-auto"
        />
        <div className="absolute top-0 rounded-xl hidden group-hover:flex bg-opacity-80 bg-navySmoke h-full w-full px-[1rem] py-[1.5rem] flex-col justify-between">
          <p className="text-softOpal">{clientName}</p>
          <div className="flex justify-between">
            {pastClient ? (
              <Link
                className={`bg-electricYellow p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`}
                href={`/past-events?client=${encodeURIComponent(clientName)}`}
              >
                View Past Events
              </Link>
            ) : (
              <>
                {clientWebsite && (
                  <Link
                    className={`bg-electricYellow p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`}
                    href={clientWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </Link>
                )}
                {clientW9Src && (
                  <Link
                    className={`bg-softOpal p-[0.75rem] min-w-[120px] rounded-[.5rem] font-medium text-black text-center`}
                    href={clientW9Src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W-9
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="px-[1rem] opacity-0 group-hover:opacity-100 pt-[0.5rem] text-visbyBold">
        {eventLink && !pastClient && (
          <ArrowLink
            text={`View ${eventLink} Events`}
            color={'black'}
            darkModeColor={'softOpal'}
            link={`${eventLink === 'current' ? `/events?client=${encodeURIComponent(clientName)}` : `/past-events?client=${encodeURIComponent(clientName)}`}`}
            className="justify-center md:justify-start text-[0.9rem]"
          />
        )}
      </div>
    </div>
  );
}
