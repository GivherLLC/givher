export const getImagePath = (imageName:string) => {
    const isProduction = process.env.GITHUB_ACTIONS || false;
    return `images/${imageName}`;
  };
  