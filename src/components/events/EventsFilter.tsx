'use client'

import React, { useState, useMemo } from 'react';
import DropdownFilter from './DropdownFilter';
import { EventType, ClientImage } from '@/types/types';
import EventCard from '../common/EventCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useIsMobile from '@/hooks/useIsMobile';

export default function EventsFilter({events, postponedEventText, clientImages}:{events:EventType[], postponedEventText:string, clientImages: ClientImage}){
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedEventType, setSelectedEventType] = useState<string>('');
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const today = new Date()
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [endDate, setEndDate] = useState<null | Date>(null);
  const isMobile = useIsMobile(768);

  const filteredEvents = useMemo(()=>{
    return  events.filter((event: EventType) =>
    (!selectedCity || event.eventCity === selectedCity) &&
    (!selectedClient || event.clientName === selectedClient) &&
    (!selectedEventType || event.eventType === selectedEventType) &&
    (
      searchQuery === '' ||
      !!event.eventType && event.eventType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      !!event.eventCity && event.eventCity.toLowerCase().includes(searchQuery.toLowerCase())
    ) &&
    (!startDate || event.firstDayOfEvent && new Date(event.firstDayOfEvent) >= startDate) &&
    (!endDate || event.firstDayOfEvent && new Date(event.firstDayOfEvent) <= endDate)
  );
  },[events, selectedCity, selectedClient, selectedEventType, searchQuery, startDate, endDate])


  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const cities: string[] = [...new Set(filteredEvents.map((event: EventType) => event.eventCity).filter((city): city is string => city !== null))];
  const clients: string[] = [...new Set(filteredEvents.map((event: EventType) => event.clientName))];
  const eventTypes: string[] = [...new Set(
    filteredEvents
      .filter((event: EventType) => !!event.eventType) // Filter out events with null eventType
      .map((event: EventType) => event.eventType as string) // Cast eventType as string
  )];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };
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
    setSelectedCity("")
    setSelectedClient("")
    setSelectedEventType("")
    setSearchQuery("")
    setStartDate(null)
    setEndDate(null)
  }

  return (
    <div className='custom-date-picker-container flex flex-col gap-[1.5rem]'>
      <div className='w-full mx-auto md:mx-0'>
        <div className={`flex flex-col md:flex-row justify-start ${events.length < 3 ? "md:justify-start": "md:justify-center"} gap-[2rem] max-w-[398px] md:max-w-[unset] md:pr-[5rem] flex-wrap`}>
          <DropdownFilter options={eventTypes} selected={selectedEventType} onSelect={handleEventTypeSelect} placeholder='Event Type'/>
          <DropdownFilter options={cities} selected={selectedCity} onSelect={handleCitySelect} placeholder='City'/>
          <DropdownFilter options={clients} selected={selectedClient} onSelect={handleClientSelect} placeholder='Client'/>
          <div className='relative flex gap-[1rem] items-center w-fit'>
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
              <DatePicker 
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  placeholderText="Select Dates"
                  minDate={today}
                  dateFormat="MM/dd/yyyy"
                  closeOnScroll={true}
                  {...(isMobile && { withPortal: true })}
                  className={`${startDate && endDate ? "min-w-[225px]":"max-w-[150px]"} custom-date-picker-container cursor-pointer font-medium color-black focus:outline-none bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke placeholder:text-black dark:placeholder:text-softOpal`}
                  />   
              {startDate && endDate && (
              <button
              onClick={()=>{onChange([null,null])}}
              className="p-0 ml-auto h-[15px] w-[15px]"
              >
                  <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform translate-y-[25%] rotate-[-45deg]`}/>
                  <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform -translate-y-[50%] rotate-45`}/>
              </button>
      )}
          </div>
          
          <div className='relative flex gap-[1rem] w-fit'>
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
              <input type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search" className="pl-[5px] focus:outline-none border-b-[1px] bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke border-navySmoke dark:border-softOpal placeholder:text-black dark:placeholder:text-softOpal font-medium" />
              {searchQuery && (
                  <button
                  onClick={()=>{setSearchQuery('')}}
                  className="h-[15px] w-[15px]"
                  >
                      <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform translate-y-[25%] rotate-[-45deg]`}/>
                      <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform -translate-y-[50%] rotate-45`}/>
                  </button>
              )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[4rem] min-h-[286px] sm:min-h-[400px]">
         {filteredEvents.map((e: EventType, i: number) => {
          const clientImage = clientImages[e.clientName]
          return(
                  <EventCard key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`} event={e} postponedEventText={postponedEventText} clientLogo={clientImage}/>
              )})
        }
        {!filteredEvents.length && (
            <div className='flex flex-col h-full w-full justify-center items-center gap-[2rem]'>
                <div className='text-black dark:text-softOpal'>No Results found!</div>
                <button onClick={()=>{clearSearch()}} className={`bg-electricYellow p-[0.75rem] min-w-[175px] rounded-[.25rem] font-medium text-black text-center bg-opacity-85 hover:bg-opacity-100 transition-opacity ease-in-out`}>
                Reset Search
                </button>
            </div>
        )}
      </div>
    </div>
  );
};