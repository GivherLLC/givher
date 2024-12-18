import React from 'react';
import ButtonLink from '@/components/common/ButtonLink';

export async function generateMetadata() {
  return {
    title: 'Page Not Found',
  };
}

export default function NotFound() {
  return (
    <div className="bg-softOpal dark:bg-navySmoke flex-grow flex flex-col gap-[2rem] items-center justify-center">
      <p className="text-black dark:text-softOpal">
        Oops! There&apos;s not a page here.
      </p>
      <ButtonLink
        text="Back to Home"
        bg="navySmoke"
        darkModeBg="electricYellow"
        link="/"
      />
    </div>
  );
}
