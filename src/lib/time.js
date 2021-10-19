export function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return {
    hours: getTimeDisplay(hours),// < 10 ? `0${hours}` : `${hours}`,
    minutes: getTimeDisplay(minutes),// < 10 ? `0${minutes}` : `${minutes}`,
    seconds: getTimeDisplay(seconds),// < 10 ? `0${seconds}` : `${seconds}`,
  };
}


export function getTimeDisplay(number) {
  if (!number) return '00';
  if (number < 10) return `0${number}`;
  return `${number}`;
}
