import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
  bg: 'softOpal' | 'navySmoke' | 'mauvelous' | 'electricYellow' | 'transparent';
  darkModeBg:
    | 'softOpal'
    | 'navySmoke'
    | 'mauvelous'
    | 'electricYellow'
    | 'transparent';
  text: string;
  link: string;
  className?: string;
  openNewTab?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void; // Optional onClick prop
};

export default function ButtonLink({
  bg,
  darkModeBg,
  text,
  link,
  className = '',
  openNewTab = false,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={link}
      {...(openNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={onClick} // Conditionally apply onClick if provided
      className={`bg-${bg} ${className} dark:bg-${darkModeBg} p-[0.75rem] min-w-[175px] rounded-[.25rem] font-visbyBold text-black text-center hover:outline hover:outline-black hover:outline-1 bg-opacity-85 hover:bg-opacity-100 transition-opacity ease-in-out focus:outline focus:outline-2 focus:outline-electricYellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-electricYellow`}
    >
      {text}
    </Link>
  );
}
