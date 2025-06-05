'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { EventTypeWithStatus, ClientImage } from '@/types/types';
import DropdownFilter from '../events/DropdownFilter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PastEventCard from '../common/PastEventCard';
import useIsMobile from '@/hooks/useIsMobile';

export default function PastEvents({
  allPastEvents,
  clientLogos,
}: {
  allPastEvents: EventTypeWithStatus[];
  clientLogos: ClientImage;
}) {
  const searchParams = useSearchParams();
  const isMobile = useIsMobile(768);
  const today = new Date();

  const [selectedEventType, setSelectedEventType] = useState<string>('');
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [endDate, setEndDate] = useState<null | Date>(null);

  // Flag to track if it's the initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const eventType = searchParams.get('eventType');
    const client = searchParams.get('client');
    const search = searchParams.get('search');
    const start = searchParams.get('startDate');
    const end = searchParams.get('endDate');

    setSelectedEventType(eventType || '');
    setSelectedClient(client || '');
    setSearchQuery(search || '');

    // Set date range from URL parameters if available
    if (start && end) {
      setStartDate(new Date(start));
      setEndDate(new Date(end));
    }

    // If filters are in the URL on the initial load, navigate to #past
    if (isInitialLoad && (eventType || client || search || (start && end))) {
      // Check if the user is already at the #past section
      if (window.location.hash !== '#past') {
        // Set location hash to jump directly without scrolling
        window.location.hash = '#past';
      } else {
        // Use scrollIntoView only if the user isn't already at #past
        const currentSection = document.getElementById('past');
        if (currentSection) {
          currentSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsInitialLoad(false); // Disable initial load flag after navigating
    }
  }, [searchParams, isInitialLoad]);

  const filteredEvents = useMemo(() => {
    return allPastEvents.filter(
      (event: EventTypeWithStatus) =>
        (!selectedClient || event.clientName === selectedClient) &&
        (!selectedEventType || event.eventType === selectedEventType) &&
        (searchQuery === '' ||
          (!!event.eventType &&
            event.eventType
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (!!event.eventCity &&
            event.eventCity
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))) &&
        (!startDate ||
          (event.firstDayOfEvent &&
            new Date(event.firstDayOfEvent) >= startDate)) &&
        (!endDate ||
          (event.firstDayOfEvent && new Date(event.firstDayOfEvent) <= endDate))
    );
  }, [
    endDate,
    searchQuery,
    selectedClient,
    selectedEventType,
    startDate,
    allPastEvents,
  ]);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const clients: string[] = [
    ...new Set(
      filteredEvents.map((event: EventTypeWithStatus) => event.clientName)
    ),
  ];
  const eventTypes: string[] = [
    ...new Set(
      filteredEvents
        .filter((event: EventTypeWithStatus) => !!event.eventType) // Filter out events with null eventType
        .map((event: EventTypeWithStatus) => event.eventType as string) // Cast eventType as string
    ),
  ];

  const handleEventTypeSelect = (client: string) => {
    setSelectedEventType(client);
  };
  const handleClientSelect = (client: string) => {
    setSelectedClient(client);
  };
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSelectedClient('');
    setSelectedEventType('');
    setSearchQuery('');
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <section
      id="past"
      className="bg-softOpal dark:bg-navySmoke py-[2.5rem] flex justify-center"
    >
      <div className="flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] mx-[0.625rem] lg:mx-[1.5625rem]">
        <div className="custom-date-picker-container flex flex-col gap-[1.5rem] w-full">
          <div className="w-full mx-auto md:mx-0">
            <div
              className={`flex flex-col md:flex-row justify-start md:justify-center gap-[2rem] max-w-[398px] md:max-w-[unset] md:pr-[5rem] flex-wrap`}
            >
              <DropdownFilter
                options={eventTypes}
                selected={selectedEventType}
                onSelect={handleEventTypeSelect}
                placeholder="Event Type"
              />
              <DropdownFilter
                options={clients}
                selected={selectedClient}
                onSelect={handleClientSelect}
                placeholder="Client"
              />
              <div className="relative flex gap-[1rem] items-center w-fit">
                {!startDate && !endDate && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '8px' }}
                    className="text-black dark:text-softOpal"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                )}
                <div>
                  <label htmlFor="date-range-picker" className="sr-only">
                    Date range
                  </label>
                  <DatePicker
                    id="date-range-picker"
                    selected={startDate}
                    onChange={onChange}
                    selectsRange
                    placeholderText="Select Dates"
                    minDate={today}
                    dateFormat="MM/dd/yyyy"
                    closeOnScroll={true}
                    {...(startDate && { startDate: startDate })}
                    {...(endDate && { endDate: endDate })}
                    {...(isMobile && { withPortal: true })}
                    className={`${startDate && endDate ? 'min-w-[225px]' : 'max-w-[150px]'} custom-date-picker-container cursor-pointer font-medium color-black focus:outline-none bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke placeholder:text-black dark:placeholder:text-softOpal`}
                  />
                </div>
                {startDate && endDate && (
                  <button
                    onClick={() => {
                      onChange([null, null]);
                    }}
                    className="p-0 ml-auto h-[15px] w-[15px]"
                  >
                    <div
                      className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform translate-y-[25%] rotate-[-45deg]`}
                    />
                    <div
                      className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform -translate-y-[50%] rotate-45`}
                    />
                  </button>
                )}
              </div>

              <div className="relative flex gap-[1rem] w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black dark:text-softOpal"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <div>
                  <label htmlFor="search-input" className="sr-only">
                    Search
                  </label>

                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search"
                    className="pl-[5px] focus:outline-none border-b-[1px] bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke border-navySmoke dark:border-softOpal placeholder:text-black dark:placeholder:text-softOpal font-medium"
                  />
                </div>
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                    }}
                    className="h-[15px] w-[15px]"
                  >
                    <div
                      className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform translate-y-[25%] rotate-[-45deg]`}
                    />
                    <div
                      className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform -translate-y-[50%] rotate-45`}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-[4rem] min-h-[286px] sm:min-h-[400px]">
            {filteredEvents.map((e: EventTypeWithStatus) => {
              const clientLogo = clientLogos[e.clientName];

              return (
                <PastEventCard
                  key={`card-${e.eventName}`}
                  event={e}
                  clientLogo={clientLogo}
                />
              );
            })}
            {!filteredEvents.length && (
              <div className="flex flex-col h-full w-full justify-center items-center gap-[2rem]">
                <div className="text-black dark:text-softOpal">
                  No Results found!
                </div>
                <button
                  onClick={() => {
                    clearSearch();
                  }}
                  className={`bg-electricYellow p-[0.75rem] min-w-[175px] rounded-[.25rem] font-medium text-black text-center bg-opacity-85 hover:bg-opacity-100 transition-opacity ease-in-out`}
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
