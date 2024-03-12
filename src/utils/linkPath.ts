export const getLinkPath = (linkPath: string) => {
    return process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/${linkPath}` : linkPath;
  };