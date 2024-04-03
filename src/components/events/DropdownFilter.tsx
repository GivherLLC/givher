// DropdownFilter.tsx
'use client'

import React, { ChangeEvent, useEffect } from 'react';

interface DropdownFilterProps {
  options: string[];
  selected: string;
  onSelect: (selectedValue: string) => void;
  placeholder?: string;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ options, selected, onSelect, placeholder }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onSelect(newValue);
  };

  return (
    <div className='relative flex items-center w-fit'>
    <select
      onChange={handleChange}
      className={`bg-softOpal dark:bg-navySmoke text-navySmoke dark:text-softOpal font-medium w-full ${selected ? "w-full":"max-w-[100px]"} cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap pr-[30px] focus:outline-none border-none`}
      value={selected}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option} className='bg-softOpal text-navySmoke'>
          {option}
        </option>
      ))}
    </select>
    {selected && (
      <button
        onClick={()=>{onSelect('')}}
        className="absolute right-[25px] p-0 ml-auto h-[15px] w-[15px]"
      >
          <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform translate-y-[25%] rotate-[-45deg]`}/>
          <div className={`h-[2px] w-full bg-navySmoke dark:bg-softOpal transform -translate-y-[50%] rotate-45`}/>
      </button>
    )}
    </div>
  );
};

export default DropdownFilter;

