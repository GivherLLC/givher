export const getImagePath = (imageName:string) => {
    const isProduction = process.env.GITHUB_ACTIONS || false;
    return isProduction ?  `/givher/images/${imageName}`: `images/${imageName}` ;
  };
  