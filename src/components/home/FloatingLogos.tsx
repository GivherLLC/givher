import React from 'react';
import Image from 'next/image';

type FloatingLogosProps = {
  logos: {
    clientLogo: string;
    logoAlt: string;
  }[];
};

export default function FloatingLogos({ logos }: FloatingLogosProps) {
  return (
    <div className="bg-white dark:bg-softOpal">
      <div className="h-[1px] bg-gradient-to-r from-mauvelous to-navySmoke dark:to-electricYellow w-full" />
      <div className="py-[2.5rem] flex justify-center overflow-hidden">
        <div className="flex w-full justify-center">
          <div className="flex flex-col w-full gap-[2.5rem] max-w-[85.75rem] overflow-hidden custom-mask">
            <div className="flex  gap-[2rem] w-full animate-[float_20s_linear_infinite]">
              {logos.map((l, i) => (
                <Image
                  key={`1-${i}`}
                  alt={l.logoAlt}
                  width={200}
                  height={80}
                  src={l.clientLogo}
                  className="h-[80px] w-auto"
                />
              ))}
              {logos.map((l, i) => (
                <Image
                  key={`2-${i}`}
                  alt={l.logoAlt}
                  width={200}
                  height={80}
                  src={l.clientLogo}
                  className="h-[80px] w-auto"
                />
              ))}
              {logos.map((l, i) => (
                <Image
                  key={`3-${i}`}
                  alt={l.logoAlt}
                  width={200}
                  height={80}
                  src={l.clientLogo}
                  className="h-[80px] w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-mauvelous to-navySmoke dark:to-electricYellow w-full" />
    </div>
  );
}
