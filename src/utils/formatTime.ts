function formatTimeTo12Hour(time: string | number): string {
  let totalMinutes: number;

  // Check if the input is a string (HH:MM format) and convert to minutes
  if (typeof time === 'string') {
    const [hours, minutes] = time.split(':').map(Number); // Split and convert to numbers
    totalMinutes = hours * 60 + minutes;
  } else if (typeof time === 'number') {
    // If it's already a number, we assume it's minutes
    totalMinutes = time;
  } else {
    throw new Error('Invalid input format for time'); // Handle other cases
  }

  // Calculate the 12-hour format
  const hours = Math.floor(totalMinutes / 60); // Get the hours
  const minutes = totalMinutes % 60; // Get the remaining minutes

  const period = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  const formattedHour = hours % 12 || 12; // Convert 24-hour to 12-hour format

  // Return formatted time
  return `${formattedHour}:${minutes.toString().padStart(2, '0')} ${period}`; // Include minutes
}

export default formatTimeTo12Hour;
