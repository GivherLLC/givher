import React from 'react';
import Image from 'next/image';

type ArrowLinkProps = {
  text: string;
  color: 'softOpal' | 'black';
  darkModeColor: 'softOpal' | 'black';
  onClickFunction: () => undefined;
};

export default function ArrowButton({
  text,
  color,
  darkModeColor,
  onClickFunction,
}: ArrowLinkProps) {
  return (
    <button
      onClick={() => {
        onClickFunction();
      }}
      className={`group/link flex gap-[1rem] items-center min-h-[40px]`}
    >
      <p
        className={`text-${color} dark:text-${darkModeColor} capitalize group-hover/link:underline group-hover/link:underline-offset-4 group-focus-visible/link:underline group-focus-visible/link:underline-offset-4`}
      >
        {text}
      </p>

      <Image
        loading="lazy"
        src={`/images/common/arrow-${color}.svg`}
        height={20}
        width={20}
        alt=""
        className="dark:hidden w-[20px] group-hover/link:transform group-hover/link:transition-transform group-hover/link:ease-in-out group-hover/link:duration-300 group-hover/link:translate-x-[0.35rem]"
      />
      <Image
        loading="lazy"
        src={`/images/common/arrow-${darkModeColor}.svg`}
        height={20}
        width={20}
        alt=""
        className="hidden dark:block  w-[20px] group-hover/link:transform group-hover/link:transition-transform group-hover/link:ease-in-out group-hover/link:duration-300 group-hover/link:translate-x-[0.35rem]"
      />
    </button>
  );
}
