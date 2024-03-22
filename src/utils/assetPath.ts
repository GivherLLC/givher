export const getAssetPath = (imagePath: string) => {
  return process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}${imagePath}` : imagePath;
};

  