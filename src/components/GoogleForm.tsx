import React from 'react';

export default function GoogleForm({ formLink }: { formLink: string }) {
  return (
    <>
      <div className="z-15 relative w-full flex justify-center pt-[2rem] xl:pt-[1rem]">
        <iframe
          title="Givher Event Invite List"
          src={formLink}
          width="640"
          height="821"
          role="form"
          aria-label="Sign-up form for Givher event invites"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}
