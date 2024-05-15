import React from "react";
import { getAssetPath } from "@/utils/assetPath";
import ButtonLink from "../common/ButtonLink";

type HeroVideoProps = {
    data : {
        videoTitle: string;
        videoDescription: string;
        videoButtonText: string;
        videoButtonLink: string;
    }
};

export default function HeroVideo({data}:HeroVideoProps){
    const {videoTitle, videoDescription, videoButtonText, videoButtonLink} = data;

    return (
          <div className="flex flex-col justify-start overflow-hidden">
            <div className="bg-black h-[calc(100vh-65px)] relative">
                <div
                    className="relative flex flex-col items-center justify-center w-full h-full left-0 mx-auto p-[1.25rem] text-center top-0 z-10"
                    >
                    <div className="h-full flex flex-col items-center justify-end pb-[50px] gap-[2.5rem]">
                        <h1 className="font-ramenson text-softOpal">{videoTitle}</h1>
                        <p className="text-softOpal max-w-[350px]">{videoDescription}</p>
                        <ButtonLink bg="softOpal" darkModeBg="transparent" text={videoButtonText} link={videoButtonLink}/>
                    </div>
                </div>
                <video
                    id="home-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden={true}
                    src={getAssetPath("/videos/givher-video.hevc.mp4")}
                    className="w-full h-full bg-black object-cover absolute overflow-clip top-0 opacity-75"
                    />

            </div>
          </div>    
    )
}