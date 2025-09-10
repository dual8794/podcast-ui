export const formatEpisodeDateTime = (date?: string, timeMillis?: string): string => {
  let formattedDate = '';
  let formattedTime = '';

  // Format date
  if (date) {
    try {
      const dateObj = new Date(date);
      const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
      const day = dateObj.getDate();
      formattedDate = `${month} ${day}`;
    } catch {
      formattedDate = '';
    }
  }

  // Format play time
  if (timeMillis) {
    try {
      const totalSeconds = Math.floor(parseInt(timeMillis) / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      if (hours > 0) {
        formattedTime = `${hours}hr ${minutes}min`;
      } else if (minutes > 0) {
        formattedTime = `${minutes}min ${seconds}sec`;
      } else {
        formattedTime = `${seconds}sec`;
      }
    } catch {
      formattedTime = '';
    }
  }

  // Combine date and time
  if (formattedDate && formattedTime) {
    return `${formattedDate} ${formattedTime}`;
  } else if (formattedDate) {
    return formattedDate;
  } else if (formattedTime) {
    return formattedTime;
  }

  return '';
}; 