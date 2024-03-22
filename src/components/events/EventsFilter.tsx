'use client'

import React, { useState, useMemo } from 'react';
import DropdownFilter from './DropdownFilter';
import data from "../../data/events.json";
import { EventType } from '@/types/types';
import EventCard from '../common/EventCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const YourNextPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const today = new Date()
  const [startDate, setStartDate] = useState<null | Date>(null);
  const [endDate, setEndDate] = useState<null | Date>(null);

  const filteredEvents = useMemo(()=>{
    return   data.events.filter((event: EventType) =>
    (!selectedCity || event.eventCity === selectedCity) &&
    (!selectedClient || event.clientName === selectedClient) &&
    (
      searchQuery === '' ||
      event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.eventCity.toLowerCase().includes(searchQuery.toLowerCase())
    ) &&
    (!startDate || new Date(event.firstDayOfEvent) >= startDate) &&
    (!endDate || new Date(event.firstDayOfEvent) <= endDate)
  );
  },[endDate, searchQuery, selectedCity, selectedClient, startDate])


  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const cities: string[] = [...new Set(data.events.map((event: EventType) => event.eventCity))];
  const clients: string[] = [...new Set(data.events.map((event: EventType) => event.clientName))];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const handleClientSelect = (client: string) => {
    setSelectedClient(client);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='custom-date-picker-container flex flex-col gap-[1.5rem]'>
      <div className={`flex justify-center ${data.events.length < 3 ? "md:justify-center": "md:justify-end"} gap-[2rem] pr-[5rem] flex-wrap`}>
        <DropdownFilter options={cities} selected={selectedCity} onSelect={handleCitySelect} placeholder='City'/>
        <DropdownFilter options={clients} selected={selectedClient} onSelect={handleClientSelect} placeholder='Client'/>
        <div className='relative flex items-center'>
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
                className={`${startDate && endDate ? "min-w-[265px]":"max-w-[150px]"} custom-date-picker-container cursor-pointer font-medium color-black pr-[25px] focus:outline-none bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke placeholder:text-black dark:placeholder:text-softOpal`}
                />
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
                style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '8px' }}
                className="text-black dark:text-softOpal"
                >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            )}    
            {startDate && endDate && (
            <button
            onClick={()=>{onChange([null,null])}}
            className="absolute right-[25px] p-0 ml-auto h-[15px] w-[15px]"
            >
                <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform translate-y-[25%] rotate-[-45deg]`}/>
                <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform -translate-y-[50%] rotate-45`}/>
            </button>
    )}
        </div>
        
        <div className='relative'>
            <input type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search" className="pl-[30px] focus:outline-none border-b-[1px] bg-softOpal text-navySmoke dark:text-softOpal dark:bg-navySmoke border-navySmoke dark:border-softOpal placeholder:text-black dark:placeholder:text-softOpal font-medium" />
            {searchQuery && (
                <button
                onClick={()=>{setSearchQuery('')}}
                className="absolute right-[25px] p-0 ml-auto h-[15px] w-[15px]"
                >
                    <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform translate-y-[25%] rotate-[-45deg]`}/>
                    <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform -translate-y-[50%] rotate-45`}/>
                </button>
            )}
            <div className='absolute left-0 top-0'>
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
            </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[4rem] min-h-[400px]">
         {filteredEvents.map((e: EventType, i: number) => (
                <EventCard key={`${i}-${e.clientName}-${e.eventName}-${e.firstDayOfEvent}`} event={e} type="all-events"/>
            ))
        }
        {!filteredEvents.length && (
            <>
                <div className='h-full flex items-center'>No Results found!</div>
                {/* <button>Clear Search</button> */}
            </>
        )}
      </div>
    </div>
  );
};

export default YourNextPage;
