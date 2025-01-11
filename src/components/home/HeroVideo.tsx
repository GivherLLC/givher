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
    <div className="flex flex-col justify-start overflow-hidden min-h-[600px]">
      <div className="bg-black h-[calc(100vh-65px)] w-full relative z-10 flex justify-center">
        <div className="absolute flex w-full max-w-[85.75rem] px-[0.625rem] lg:px-[1.5625rem] flex-col items-center lg:items-start text-center lg:text-left justify-end gap-[1rem] bottom-[100px] z-10">
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
          className="hidden lg:block w-full h-full bg-black object-cover absolute overflow-clip top-0 opacity-75"
        />
        <video
          id="home-video-mobile"
          autoPlay
          loop
          muted
          controls
          playsInline
          aria-hidden={true}
          src={'/videos/3-compressed-720p.hevc.mp4'}
          className="lg:hidden w-full h-full bg-black object-cover absolute overflow-clip top-0 opacity-75"
        />
      </div>
    </div>
  );
}
