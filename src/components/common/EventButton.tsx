import React from 'react';
import Link from 'next/link';

type EventButtonProps = {
  text: string;
  link: string;
  bg: 'mauvelous' | 'electricYellow';
  openNewTab?: boolean;
};

export default function EventButton({
  text,
  link,
  bg,
  openNewTab,
}: EventButtonProps) {
  return (
    <div className="group relative transition duration-300 before:bg-black before:rounded-[12px] before:h-[calc(100%+3px)] before:w-[calc(100%+3.5px)] before:absolute before:left-0 before:top-0 before:transition before:transform before:translate-x-[2px] before:translate-y-[2px]">
      <Link
        href={link}
        {...(openNewTab
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className={`${bg === 'mauvelous' ? 'bg-mauvelous' : 'bg-electricYellow'} 
        text-navySmoke text-[0.75rem] uppercase font-visbyBold py-[10px] px-[20px] 
        rounded-[12px] border-[3px] border-black relative z-10 block
        group-hover:transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]
        group-focus-visible:transform group-focus-visible:translate-x-[-2px] group-focus-visible:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-softOpal
      `}
      >
        {text}
      </Link>
    </div>
  );
}
