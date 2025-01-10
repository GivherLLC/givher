import React from 'react';
import ButtonLink from '../common/ButtonLink';

type HeroVideoProps = {
  data: {
    videoTitle: string;
    videoDescription: string;
    videoButtonText: string;
    videoButtonLink: string;
  };
};

export default function HeroVideo({ data }: HeroVideoProps) {
  const { videoTitle, videoDescription, videoButtonText, videoButtonLink } =
    data;

  return (
    <div className="bg-softOpal dark:bg-navySmoke flex flex-col justify-start overflow-hidden lg:min-h-[600px] px-[0.625rem] md:px-[1.5625rem] lg:px-0">
      <div className="lg:hidden flex flex-col justify-center items-center py-[1.5rem] px-[0.625rem] md:px-[1.5625rem]">
        <h1 className="font-visbyBold text-navySmoke dark:text-softOpal text-center max-w-[450px]">
          {videoTitle}
        </h1>
      </div>
      <div className="bg-black lg:h-[calc(100vh-65px)] w-full relative z-10 flex justify-center">
        <div className="hidden absolute lg:flex w-full max-w-[85.75rem] px-[0.625rem] md:px-[1.5625rem] flex-col items-center lg:items-start text-center lg:text-left justify-end gap-[1rem] bottom-[100px] z-10">
          <h1 className="font-visbyBold text-softOpal max-w-[450px]">
            {videoTitle}
          </h1>
          <p className="text-softOpal max-w-[350px]">{videoDescription}</p>
          <ButtonLink
            bg="softOpal"
            darkModeBg="transparent"
            text={videoButtonText}
            link={videoButtonLink}
          />
        </div>
        <video
          id="home-video"
          autoPlay
          loop
          muted
          controls
          playsInline
          aria-hidden={true}
          src={'/videos/final-video.hevc.mp4'}
          className="lg:w-full lg:h-full lg:object-cover lg:opacity-75 aspect-video"
        />
      </div>
      <div className="lg:hidden flex flex-col justify-center items-center py-[1rem] px-[0.625rem] md:px-[1.5625rem]">
        <ButtonLink
          bg="mauvelous"
          darkModeBg="transparent"
          text={videoButtonText}
          link={videoButtonLink}
        />
      </div>
    </div>
  );
}
