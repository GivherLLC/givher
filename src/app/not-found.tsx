import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import ButtonLink from '@/components/common/ButtonLink';

export default function NotFound() {
  return (
    <GlobalLayout>
      <div className="bg-softOpal dark:bg-navySmoke flex-grow flex flex-col gap-[2rem] items-center justify-center">
          <p className="text-black dark:text-softOpal">Oops! There&apos;s not a page here.</p>
          <ButtonLink type="flat" text="Back to Home" bg="navySmoke" darkModeBg="electricYellow" link="/"/>
      </div>
    </GlobalLayout>
  );
}
