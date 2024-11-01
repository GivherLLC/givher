const getEventNameParam = (eventName: string) => {
  return eventName
    .toLowerCase() // Convert to lowercase
    .replace(/[’']/g, '') // Remove apostrophes
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, '') // Remove any character that is not a letter, number, or dash
    .replace(/--+/g, '-') // Replace multiple consecutive dashes with a single dash
    .replace(/^-+|-+$/g, ''); // Remove leading or trailing dashes
};

export default getEventNameParam;
