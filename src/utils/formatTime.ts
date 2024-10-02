function formatTimeTo12Hour(minutes: number): string {
    const hours = Math.floor(minutes / 60); // Get the hours
  const mins = minutes % 60; // Get the remaining minutes

  const period = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  const formattedHour = hours % 12 || 12; // Convert 24-hour to 12-hour format

  // If it's on the hour, return without minutes, otherwise include minutes
  return mins === 0 
    ? `${formattedHour} ${period}` // On the hour, no minutes
    : `${formattedHour}:${mins.toString().padStart(2, '0')} ${period}`; // Include minutes
  }
  

export default formatTimeTo12Hour;