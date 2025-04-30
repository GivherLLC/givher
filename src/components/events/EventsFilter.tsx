'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import DropdownFilter from './DropdownFilter';
import { EventType, ClientImage } from '@/types/types';
import EventCard from '../common/EventCard';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useIsMobile from '@/hooks/useIsMobile';

export default function EventsFilter({
  events,
  postponedEventText,
  clientImages,
}: {
  events: EventType[];
  postponedEventText: string;
  clientImages: ClientImage;
}) {
  const searchParams = useSearchParams();
  const isMobile = useIsMobile(768);
  const today = new Date();

  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedEventType, setSelectedEventType] = useState<string>('');
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [endDate, setEndDate] = useState<null | Date>(null);

  // Flag to track if it's the initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Set filters from URL query parameters on component mount
  useEffect(() => {
    const city = searchParams.get('city');
    const eventType = searchParams.get('eventType');
    const client = searchParams.get('client');
    const search = searchParams.get('search');
    const start = searchParams.get('startDate');
    const end = searchParams.get('endDate');

    setSelectedCity(city || '');
    setSelectedEventType(eventType || '');
    setSelectedClient(client || '');
    setSearchQuery(search || '');

    // Set date range from URL parameters if available
    if (start && end) {
      setStartDate(new Date(start));
      setEndDate(new Date(end));
    }

    // If there are filters in the URL on the initial load, scroll to the section
    if (
      isInitialLoad &&
      (city || eventType || client || search || (start && end))
    ) {
      const currentSection = document.getElementById('current');
      if (currentSection) {
        currentSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsInitialLoad(false); // Disable initial load flag after scrolling
    }
  }, [searchParams, isInitialLoad]);

  const filteredEvents = useMemo(() => {
    return events.filter(
      (event: EventType) =>
        (!selectedCity || event.eventCity === selectedCity) &&
        (!selectedClient || event.clientName === selectedClient) && // Apply client filter here
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
    events,
    selectedCity,
    selectedClient,
    selectedEventType,
    searchQuery,
    startDate,
    endDate,
  ]);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleCitySelect = (city: string) => setSelectedCity(city);
  const handleEventTypeSelect = (type: string) => setSelectedEventType(type);
  const handleClientSelect = (client: string) => setSelectedClient(client);
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  const clearSearch = () => {
    setSelectedCity('');
    setSelectedClient('');
    setSelectedEventType('');
    setSearchQuery('');
    setStartDate(null);
    setEndDate(null);
  };

  const cities: string[] = [
    ...new Set(
      events
        .map((event) => event.eventCity)
        .filter((city): city is string => !!city)
    ),
  ];
  const clients: string[] = [
    ...new Set(events.map((event) => event.clientName)),
  ];
  const eventTypes: string[] = [
    ...new Set(
      events
        .filter((event) => !!event.eventType)
        .map((event) => event.eventType as string)
    ),
  ];

  return (
    <div
      id="current"
      className="custom-date-picker-container flex flex-col gap-[1.5rem]"
    >
      <div className="w-full mx-auto md:mx-0">
        <div
          className={`flex flex-col md:flex-row justify-start ${events.length < 3 ? 'md:justify-start' : 'md:justify-center'} gap-[2rem] max-w-[398px] md:max-w-[unset] md:pr-[5rem] flex-wrap`}
        >
          <DropdownFilter
            options={eventTypes}
            selected={selectedEventType}
            onSelect={handleEventTypeSelect}
            placeholder="Event Type"
          />
          <DropdownFilter
            options={cities}
            selected={selectedCity}
            onSelect={handleCitySelect}
            placeholder="City"
          />
          <DropdownFilter
            options={clients}
            selected={selectedClient}
            onSelect={handleClientSelect}
            placeholder="Client"
          />
          <div className="relative flex gap-[1rem] items-center w-fit">
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
                onClick={() => onChange([null, null])}
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
                onClick={() => setSearchQuery('')}
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
        {filteredEvents.map((e: EventType, i: number) => (
          <EventCard
            key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`}
            event={e}
            postponedEventText={postponedEventText}
            clientLogo={clientImages[e.clientName]}
          />
        ))}
        {!filteredEvents.length && (
          <div className="flex flex-col h-full w-full justify-center items-center gap-[2rem]">
            <div className="text-black dark:text-softOpal">
              No Results found!
            </div>
            <button
              onClick={clearSearch}
              className="bg-electricYellow p-[0.75rem] min-w-[175px] rounded-[.25rem] font-medium text-black text-center bg-opacity-85 hover:bg-opacity-100 transition-opacity ease-in-out"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
