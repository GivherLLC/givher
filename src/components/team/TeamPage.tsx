'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ArrowButton from '../common/ArrowButton';
import Link from 'next/link';
import { TeamMember, TeamPageData } from '@/types/types';

type TeamPageProps = {
  data: TeamPageData;
};

export default function TeamPage({ data }: TeamPageProps) {
  const { teamPageTitle, teamMembers } = data;
  const [showBio, setShowBio] = useState<TeamMember | null>(null);

  useEffect(() => {
    //prevent scrolling behind open bio
    if (showBio) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBio]);

  return (
    <div className="bg-white dark:bg-navySmoke py-[2.5rem] flex justify-center">
      <div className="relative flex flex-col w-full items-center justify-center gap-[2.5rem] max-w-[85.75rem] px-[0.625rem] md:px-[1.5625rem]">
        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal">
          {teamPageTitle}
        </h1>
        <div
          className={`w-full flex flex-col flex-wrap xl:flex-row gap-[5rem] ${teamMembers.length > 2 ? 'justify-between' : 'justify-around'}`}
        >
          {teamMembers.map((t) => (
            <div
              key={t.name}
              data-id={t.name}
              className="xl:max-w-[25%] flex flex-col md:flex-row xl:flex-col justify-center items-center gap-[2rem] xl:gap-[1rem] w-full"
            >
              <Image
                priority={true}
                onClick={() => {
                  setShowBio(t);
                }}
                src={t.imageSrc}
                height={420}
                width={420}
                alt="Jay Franco headshot"
                className="w-full max-w-[400px] mb-[1rem] cursor-pointer"
              />
              <div className="flex flex-col gap-[1rem] justify-center items-center">
                <h3 className="font-visbyBold text-navySmoke dark:text-electricYellow text-[2rem] text-center">
                  {t.name}
                </h3>
                <p className="text-navySmoke dark:text-softOpal text-[1.25rem] text-center">
                  {t.title}
                </p>
                <div className="h-[3px] w-[50px] bg-mauvelous" />
                <div
                  data-id="team-member-icons"
                  className="flex gap-[2rem] mb-[1rem]"
                >
                  {t.iconLinks.map((i) => (
                    <Link key={i.iconLink} href={i.iconLink}>
                      <Image
                        priority={true}
                        src={i.iconImageSrc}
                        alt="icon"
                        height={27}
                        width={27}
                        className="dark:hidden hover:scale-[1.1] transition-transform ease-in-out"
                      />
                      <Image
                        priority={true}
                        src={i.darkmodeSrc}
                        alt="icon"
                        height={27}
                        width={27}
                        className="hidden dark:block hover:scale-[1.1] transition-transform ease-in-out"
                      />
                    </Link>
                  ))}
                  <ArrowButton
                    text="View Bio"
                    color="black"
                    darkModeColor="softOpal"
                    onClickFunction={() => {
                      setShowBio(t);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          data-id="bio"
          className={`transition-opacity duration-300 ease-in-out z-[101] ${showBio ? 'opacity-100' : 'opacity-0'}`}
        >
          {showBio && (
            <div
              className="fixed top-0 left-0 bottom-0 w-full h-full bg-overlay visible overflow-hidden z-[100]"
              onClick={() => setShowBio(null)} // Close modal on background click
            >
              <div
                className="bg-softOpal dark:bg-navySmoke opacity-100 max-h-[80vh] max-w-[1040px] min-h-[100px] top-[10%] mx-auto relative p-[2.5rem] overflow-y-scroll z-[101]"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
              >
                <button
                  type="button"
                  data-id="Close Button"
                  onClick={() => setShowBio(null)}
                  className="self-end flex flex-col items-center justify-between h-[50px] w-[50px] p-0 transition-transform absolute top-[10px] right-[10px]"
                >
                  <div className="h-[2px] w-full bg-grey absolute top-[50%] left-[50%] max-w-[20px] transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] mt-0" />
                  <div className="h-[2px] w-full bg-grey absolute top-[50%] left-[50%] max-w-[20px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 mt-0" />
                </button>
                <div className="flex flex-col md:flex-row gap-[1.5rem]">
                  <div className="flex flex-col items-center gap-[1rem]">
                    <Image
                      loading="lazy"
                      src={showBio.imageSrc}
                      height={420}
                      width={420}
                      alt="Jay Franco headshot"
                      className="max-w-[325px] mb-[1rem] cursor-pointer"
                    />
                    <h3 className="font-visbyBold text-black dark:text-softOpal text-[1.5rem]">
                      {showBio.name}
                    </h3>
                    <p className="text-black dark:text-softOpal text-[1rem]">
                      {showBio.title}
                    </p>
                    <div
                      data-id="team-member-icons"
                      className="flex gap-[2rem]"
                    >
                      {showBio.iconLinks.map((i) => (
                        <Link key={i.iconLink} href={i.iconLink}>
                          <Image
                            loading="lazy"
                            src={i.iconImageSrc}
                            alt="icon"
                            height={27}
                            width={27}
                            className="w-[20px] h-[20px] dark:hidden hover:scale-[1.1] transition-transform ease-in-out"
                          />
                          <Image
                            loading="lazy"
                            src={i.darkmodeSrc}
                            alt="icon"
                            height={27}
                            width={27}
                            className="w-[20px] h-[20px] hidden dark:block hover:scale-[1.1] transition-transform ease-in-out"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-[1rem] md:px-[2rem]">
                    {showBio.bio.map((p) => (
                      <p
                        key={p.paragraph}
                        className="text-black dark:text-softOpal text-sm md:text-base"
                      >
                        {p.paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
